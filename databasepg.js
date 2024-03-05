const { Client } = require('pg');

let client_info = {
  host: "localhost",
  user: "TA",
  port: 5432,
  password: "TA2024",
  database: "COMP3005A3"
};

let createTable = async () => {
  const students_table = `CREATE TABLE Students (
                            id serial PRIMARY KEY,
                            first_name VARCHAR(256) NOT NULL,
                            last_name VARCHAR(256) NOT NULL,
                            email VARCHAR(256) NOT NULL UNIQUE,
                            enrollment_date DATE
                          );`

  const client = new Client(client_info)
  
  await client.connect()

  try {
    await client.query(students_table);
    console.log("STUDENTS TABLE CREATED");
  } 

  catch (e) {
    console.log(e);
  } 

  finally {
    await client.end();
  }

}

let dropTable = async() => {
  const query = `DROP TABLE Students`
  const client = new Client(client_info)
  
  await client.connect();

  try {
    await client.query(query)
    console.log("STUDENTS TABLE DROPPED")
  }

  catch(e) {
    console.log(e)
  }

  finally {
    await client.end()
  }
}

let addStudent = async (first_name, last_name, email, enrollment_date) => {
  const query = `INSERT INTO Students(first_name, last_name, email, enrollment_date) VALUES('${first_name}', '${last_name}', '${email}', '${enrollment_date}')`
  const client = new Client(client_info)
  
  await client.connect()
  
  try {
    await client.query(query);
    console.log(`STUDENT ${first_name} ${last_name} ADDED`)
  }

  catch (e) {
    console.log(e);
  }

  finally {
    await client.end();
  }

}

let getAllStudents = async () => {
  const query = "SELECT * FROM Students"
  const client = new Client(client_info)
  
  await client.connect()
  
  try {
    const results = await client.query(query)
    console.table(results.rows)
  } 

  catch (e) {
    console.log(e)
  } 

  finally {
    await client.end()
  }
}

let updateStudentEmail = async (student_id, new_email) => {
  const query = `UPDATE STUDENTS
                 SET email = '${new_email}'
                 WHERE id = ${student_id}`
  
  const client = new Client(client_info)
  await client.connect()

  try {
    await client.query(query)
    console.log(`STUDENT ${student_id} EMAIL UPDATED TO ${new_email}`);
  } 

  catch(e) {
    console.log(e)
  }

  finally {
   await client.end() 
  }
  
}

let deleteStudent = async (student_id) => {
  const query = `DELETE FROM Students WHERE id = ${student_id}`
  const client = new Client(client_info);

  await client.connect()

  try {
    await client.query(query)
    console.log(`STUDENT ${student_id} DELETED FROM STUDENTS`)
  }

  catch (e) {
    console.log(e)
  }

  finally { 
    await client.end()
  }

}

let COMP3005_A3_Q1_TEST = async () => {

  await createTable() //Comment this if you already have the table set up, it is a helper function.
  await addStudent('John', 'Doe', 'john.doe@example.com', '2023-09-01')
  await addStudent('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01')
  await addStudent('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02')
  await getAllStudents()
  await updateStudentEmail(3, "NEWEMAIL@GMAIL.COM")
  await getAllStudents()
  await deleteStudent(1)
  await getAllStudents()
  // await dropTable() //Comment this out if you'd like to interact with PostgreSQL after running this test.

}

COMP3005_A3_Q1_TEST();
