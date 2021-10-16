import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: Student[];
  sortSelected!: string;
  sortingInput!:string;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.students = (await this.studentService.getStudents()) || [];
    } catch (error) {
      console.log(error);
    }
  }
  sortDataBy(array:Student[]){
    console.log(this.sortSelected);
    console.log(array);
    if(this.sortingInput!=""&&array.length>0){
      switch(this.sortSelected){
        case "surname":
          array = array.filter((a)=>a.surname.includes(this.sortingInput))
          return array.sort((a, b) => a.surname > b.surname ? 1 : a.surname === b.surname ? 0 : -1);
        case"group":
          array = array.filter((a)=>a.group.includes(this.sortingInput))
          return array.sort((a, b) => a.group > b.group ? 1 : a.group === b.group ? 0 : -1);
        case"direction":
          array = array.filter((a)=>a.direction.includes(this.sortingInput))
          return array.sort((a, b) => a.direction > b.direction ? 1 : a.direction === b.direction ? 0 : -1);
      }
    }
    return array.sort((a, b) => a.surname > b.surname ? 1 : a.surname === b.surname ? 0 : -1);
  }
  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'item', id]);
    } else {
      this.router.navigate([this.router.url, 'item']);
    }
  }
}
