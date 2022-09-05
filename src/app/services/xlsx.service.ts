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
    
    workbook.xlsx.writeBuffer().then((data: BlobPart) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fname+'-'+new Date().valueOf()+'.xlsx');
    });
  }
}
