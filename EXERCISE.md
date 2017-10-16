Notes on Kwan's exercise

---
There are Teachers
There are Students
Teachers can create multiple quizzes with many questions (each question is multiple choice)
Teachers can assign quizzes to students
Students solve/answer questions to complete the quiz, but they don't have to complete it at once. (Partial submissions can be made).
Quizzes need to get graded
For each teacher total grade is accumulated over a semester per student
---

Assumptions:
* If a quiz is not complete by the end of the semester, the grade is a 0

Model:

users
  id
  name
  is_teacher
  is_student
  // probably a bunch more stuff here but this'll do for now

quizs
  id
  teacher_id

questions
  id
  content // a data structure containing the multiple choice question - can detail this if time
  answer // we'd never pass this to the student's client if this was anything more than a practice quiz
         // or we'd invite cheating

quiz_questions
  quiz_id
  question_id

assignments
  id
  teacher_id
  student_id
  quiz_id
  due_date // this will be the end of the semester, in this exercise
  is_complete // boolean, when the student has completed the assignment
  grade // the student would be evaluated on each question in the quiz which would role up to this grade

// This stores the student's answer.  We can associate a grade with
// the answer in here or move that elsewhere (which might be better?)
assignment_quiz_answers
  id
  teacher_id
  student_id
  quiz_id
  question_id
  answer
  grade

"For each teacher total grade is accumulated over a semester per student" would be returned by the api,
something along the lines of...
  select sum(a.grade)/count(a.grade) as total_grade, u_students.name
  from assignments a, users u_teacher, users u_students
  join a.teacher_id = u_teacher.id
  left join a.student_id = u_student.id
  group by u_students.id
...or something similar.

