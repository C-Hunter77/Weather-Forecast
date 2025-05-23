import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Hardcoded query: DELETE FROM course_names WHERE id = 3;
pool.query(`DELETE FROM course_names WHERE id = $1`, [3], (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${result.rowCount} row(s) deleted!`);
  }
});

// Query database
pool.query('SELECT * FROM course_names', (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
});

// Default response for any other request (Not Found)
app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
