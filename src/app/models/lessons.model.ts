import { Student } from "./student.model";

export interface Lesson{
    id:number;
    date:Date;
    topics?:String;
    students:lesson_student[];
}

export interface lesson_student{
    join_time?:Date;
    exit_time?:Date;
    daily_grade:number;
    student:Student;
}