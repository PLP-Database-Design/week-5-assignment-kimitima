const express = require('express')
   const app = express()
   // import
const mysql = require('mysql2');

//create a connection
const connect = mysql.createConnection({
    host:'localhost',
    user:'3306',
    user:'root',
    password:'Dorn2025@#',
    database:'node_crud'
})
//connect to the database
connect.connect((error)=>{
    if (error){
        console.log('An error occured:', err.stack)
    return;
    }
    console.log('DB connected!');
});
//export the connection
module.exports =connect

   
   // Question 1 goes here
   // Create GET endpoint
app.get('/patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error retrieving patients:', err);
        res.status(500).send('Server error');
        return;
      }
      res.json(results);
    });
  });


   // Question 2 goes here
   app.get('/providers', (req, res) => {
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error retrieving providers:', err);
        res.status(500).send('Server error');
        return;
      }
      res.json(results);
    });
  });


   // Question 3 goes here
   app.get('/patients/:firstName', (req, res) => {
    const firstName = req.params.firstName;
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
    db.query(query, [firstName], (err, results) => {
      if (err) {
        console.error('Error retrieving patients:', err);
        res.status(500).send('Server error');
        return;
      }
      res.json(results);
    });
  });

   // Question 4 goes here
// Create GET endpoint to retrieve patients by first name
app.get('/patients/:firstName', (req, res) => {
    const firstName = req.params.firstName;
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
    db.query(query, [firstName], (err, results) => {
      if (err) {
        console.error('Error retrieving patients:', err);
        res.status(500).send('Server error');
        return;
      }
      res.json(results);
    });
  });
   

   // listen to the server
   const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   