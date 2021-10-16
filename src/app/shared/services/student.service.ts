import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() : Promise<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/student`).toPromise();
  }

  postStudents(data: Student) : Promise<Student> {
    return this.http.post<Student>(`${environment.apiUrl}/student`, data).toPromise();
  }

  getStudent(id: number) : Promise<Student> {
    return this.http.get<Student>(`${environment.apiUrl}/student/${id}`).toPromise();
  }

  putStudent(id: number, data: Student) : Promise<Student> {
    return this.http.put<Student>(`${environment.apiUrl}/student/${id}`, data).toPromise();
  }

  deleteStudent(id: number) : Promise<Student> {
    return this.http.delete<Student>(`${environment.apiUrl}/student/${id}`).toPromise();
  }

}
