import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
 students =[
   {id:1, name:"alex",description:"updated"},
   {id:2, name:"a",description:"updated1"},
   {id:3, name:"b",description:"updated2"},
   {id:4, name:"c",description:"updated3"}
 ]
  constructor() { }

  public getStudents():Array<{id, name, description}>{
    return this.students;}
    public createStudent(students: {id ,name, description}){
this.students.push(students);
    }
  }


