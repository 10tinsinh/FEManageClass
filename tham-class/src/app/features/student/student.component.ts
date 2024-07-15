import { Component, OnInit, ViewChild } from '@angular/core';
import { IStudent } from './student.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'age', 'gender', 'class', 'group'];
  dataSource: MatTableDataSource<IStudent>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  students: IStudent[] = [
    {
      code: 'A001',
      name: 'John',
      age: 20,
      gender: 'Male',
      class: '12A',
      group: 'English'
    },
    {
      code: 'A002',
      name: 'Jane',
      age: 22,
      gender: 'Female',
      class: '12B',
      group: 'Math'
    },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}