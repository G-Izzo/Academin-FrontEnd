import { Injectable } from '@angular/core';
import { Cell, Column } from 'exceljs';
const Excel = require('exceljs');
import * as fs from 'file-saver';
import { Lesson, lesson_student } from '../models/lessons.model';
import { Course } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class XlsxService {

  constructor() { }

  downloadExcel(course:Course){
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`${course.name} ${new Date().getMonth()+1}-${new Date().getFullYear()}`);
    let fname=`${course.name} ${new Date().getFullYear()}`;

    let end= new Date(course.ending_date.getFullYear(),course.ending_date.getMonth(),course.ending_date.getDate()+1);
    //Aggiunta della prima riga
    let riga1=this.generaPrimaRiga(course.starting_date, end);
    worksheet.addRow(["Nominativo Risorsa",...riga1]);

    //Aggiunta della seconda riga
    let riga2=this.generaSecondaRiga(course.starting_date, end);
    worksheet.addRow(["",...riga2]);

    //Aggiunta della terza riga    
    let riga3=this.generaTerzaRiga(course.starting_date, end);
    worksheet.addRow(["",...riga3]);

    //Aggiunta delle righe dei voti
    let righeVoti:any[][];
    let students:any[];
    if(course.lessons!=undefined)
    {
      students=this.listaStudenti(course.lessons);
      console.log(students);
      
      righeVoti=this.generaRigheVoti(course.lessons, students, course.starting_date);
      console.log(righeVoti);
      
      righeVoti.forEach(riga=>{
        worksheet.addRow(riga);
      });
    }

    let dataMax: number[];
    let max: number;
    worksheet.columns.forEach((column: Column) => {
        dataMax = [];
        column.eachCell({includeEmpty: false}, (cell: Cell) => {
            dataMax.push(cell.value?.toString().length || 0);
        });
        max = Math.max(...dataMax);
        column.width = max;
        column.width = max < 3 ? 3 : max;
    });




    workbook.xlsx.writeBuffer().then((data: BlobPart) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Consuntivo '+fname+'.xlsx');
    });
  }

  generaPrimaRiga(starting_date:Date, ending_date:Date){
    let start= new Date(starting_date.getTime());
    let MESI=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"]
    let mesi = [];
    for (;start.getTime() <= ending_date.getTime(); start.setDate(start.getDate() + 1)) {
      if(start.getTime()==new Date(starting_date).getTime())
      {
        mesi.push(`${MESI[start.getMonth()]}-${this.estraiCifre(start.getFullYear())}`);
      }
      else if(start.getDate()==1)
      {
        mesi.push("T.O.")
        mesi.push(`${MESI[start.getMonth()]}-${this.estraiCifre(start.getFullYear())}`);
      }        
      else
        mesi.push("");
    }
    return mesi;
  }

  generaSecondaRiga(starting_date:Date, ending_date:Date){  
    let start= new Date(starting_date.getTime());
    let numbers = [];
    for (;start.getTime() <= ending_date.getTime(); start.setDate(start.getDate() + 1))
    {
      if(start.getDate()==1)
        numbers.push("")
      numbers.push(start.getDate());
    }      
    return numbers;
  }

  generaTerzaRiga(starting_date:Date, ending_date:Date){  
    let start= new Date(starting_date.getTime());
    let days = [];
    let GIORNI=["L", "M", "M", "G", "V", "S", "D"]
    for (;start.getTime() <= ending_date.getTime(); start.setDate(start.getDate() + 1))
    {
      if(start.getDate()==1)
        days.push("")
      days.push(GIORNI[start.getDay()]);
    }
    return days;
  }

  listaStudenti(lessons:Lesson[]){
    let studenti: lesson_student[] = [];
    lessons.forEach(lesson => {
      lesson.students.forEach(lesson_student => {
        let j = 0;
        for (let i = 0; i < studenti.length; i++)
          if (studenti[i].student.id == lesson_student.student.id)
            break;
          else
            j++;
        if (j == studenti.length)
          studenti.push(lesson_student);
      });
    });
    return studenti;
  }

  generaRigheVoti(lessons:Lesson[], students:lesson_student[], ultimaData:Date){
    let righeVoti: any[][]=[];
    students.forEach(student=>{
      let studente:String[]=[`${student.student.name} ${student.student.surname}`];
      lessons.forEach(lesson=>{
        this.aggiungiSpazio(studente, this.calcolaDifferenza(new Date(lesson.date), ultimaData));
        ultimaData = new Date(lesson.date);
        let flag=true;
        lesson.students.forEach(lesson_student=>{
          if(lesson_student.student.id==student.student.id)
          {
            studente.push(lesson_student.daily_grade.toString());
            flag=false;
            ultimaData=lesson.date;
          }
        })
        if(flag)
          this.aggiungiSpazio(studente, 1);
      })
      righeVoti.push(studente);
    });
    return righeVoti;
  }

  calcolaDifferenza(data1: Date, data2: Date) {
    return Math.round((data1.getTime() - data2.getTime()) * 1.1574074074067E-8) -1 ;
  }

  aggiungiSpazio(riga: String[], spazi: Number) {
    for (let i = 0; i < spazi; i++)
      riga.push("");
  }

  estraiCifre(anno:number){
    let cifre=anno%10;
    anno=Math.round(anno/=10);
    return (anno%10)*10+cifre;    
  }

  
}
