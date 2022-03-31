import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Entry, UserTable } from 'src/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-edwdashboard',
  templateUrl: './edwdashboard.component.html',
  styleUrls: ['./edwdashboard.component.scss']
})
export class EdwdashboardComponent implements OnInit 
{
        tableData:any = []
        displayedColoums:String[]=['streamde','date' ,'gvgvgvg','active']
        datasource= new MatTableDataSource(this.tableData)
        constructor(private dataservice:DataService) { }

  ngOnInit() 
  {
    return this.dataservice.getTableList().subscribe(result=>
      {this.tableData=result
      console.warn(result)})

  }
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
}
