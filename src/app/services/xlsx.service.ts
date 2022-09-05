import { Injectable } from '@angular/core';
const Excel = require('exceljs');
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class XlsxService {

  constructor() { }

  downloadExcel(){
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet("Employee Data");
    let fname="Emp Data Sep 2020"
    workbook.xlsx.writeBuffer().then((data: BlobPart) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fname+'-'+new Date().valueOf()+'.xlsx');
    });
  }
}
