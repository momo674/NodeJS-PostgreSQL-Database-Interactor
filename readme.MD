Assignment for COMP 3005 A3 - Momo Radaideh 101292701
This is a simple JavaScript program that interacts with a PostgreSQL server.<br> It utilizes multiple Node.js models to interact with PostgreSQL within a single package.<br>
It uses async functions to properly interact with the database.<br>

Setup: <br>
  - Have Node.js on machine installed.
  - run the following commands into your shell of choice (within the directory of this folder of course)
   1. ` npm install -y `
   2. ` npm install pg `

Instructions:<br>
  I created an async function called ` COMP3005_A3_Q1_TEST ` which goes through each function and also sets the table up. At the end of the test, it drops the table so you can re run it multiple times without attempting to add the same data back in the database.

  If you would like to keep the database modified after the test, comment the
  - ` await dropTable() ` within the test. (line 155)

  If you would like to add any extra steps in the test case using the following avaible functions, please make sure to add the ` await ` keyword infront of calling the function.

  ` -- example -- ` <br>
  ` await updateStudentEmail(2, "enter_new_email@gmail.com") `


Documentation:<br>
  `createTable()` - Helper function that creates the Student Table. <br>
  `deleteTable()` - Helper function that drops the Student Table. <br>
  `addStudent(first_name, last_name, email, enrollment_date)` - async function which adds a student into the Student Table. <br>
  `getAllStudents()` - async function which displays a table of all the students in the Student Table. <br>
  `updateStudentEmail(student_id, new_email)` - async function which updates the email for the student with that specific id. <br>
  `deleteStudent(student_id)` - async function which deletes a record from student table. <br>


FAQ: <br>
  Q: Why did you use async functions? <br>
  A: Interacting with the database requires using promises in JavaScript, which makes the order of functions being called a mess if i do not declare them as async functions. That is also why in ` COMP3005_A3_Q1_TEST() ` every function called has an await keyword infront of it's call. This is so that we do not proceed to the next function call until the first function has finished completing it's promise.

Video Demo: <br>
https://youtu.be/uyfbgdUytZs
