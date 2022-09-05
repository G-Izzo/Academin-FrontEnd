import { Injectable } from '@angular/core';
const Excel = require('exceljs');
import * as fs from 'file-saver';
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
    console.log(course.starting_date, end);

    let riga1=this.generaPrimaRiga(course.starting_date, end);
    worksheet.addRow(["Nominativo Risorsa",...riga1]);

    //Aggiunta della seconda riga
    console.log(course.starting_date, end);

    let riga2=this.generaSecondaRiga(course.starting_date, end);
    worksheet.addRow(["",...riga2]);

    //Aggiunta della terza riga
    console.log(course.starting_date, end);
    
    let riga3=this.generaTerzaRiga(course.starting_date, end);
    worksheet.addRow(["",...riga3]);

    workbook.xlsx.writeBuffer().then((data: BlobPart) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fname+'.xlsx');
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
        mesi.push(`${MESI[start.getMonth()]}-${this.estraiCifre(start.getFullYear())}`);
      else
        mesi.push("");
    }
    return mesi;
  }

  generaSecondaRiga(starting_date:Date, ending_date:Date){  
    let start= new Date(starting_date.getTime());
    let numbers = [];
    for (;start.getTime() <= ending_date.getTime(); start.setDate(start.getDate() + 1))
      numbers.push(start.getDate());
    return numbers;
  }

  generaTerzaRiga(starting_date:Date, ending_date:Date){  
    let start= new Date(starting_date.getTime());
    let days = [];
    let GIORNI=["L", "M", "M", "G", "V", "S", "D"]
    for (;start.getTime() <= ending_date.getTime(); start.setDate(start.getDate() + 1))
      days.push(GIORNI[start.getDay()]);
    return days;
  }

  generaRigheVoti(){
    
  }

  estraiCifre(anno:number){
    let cifre=anno%10;
    anno=Math.round(anno/=10);
    return (anno%10)*10+cifre;    
  }

  
}
