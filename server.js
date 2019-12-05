const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");

const port = 3000;
const app = express();
const db = new sqlite3.Database("quotes.db");

app.listen(port, () => console.log(`Express app listening on port ${port}...`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello, World!"));

// Table has the following fields
// rowid: a unique number to reference the quote
// quote: a string containing the quote itself
// author: a string containing the author's first and last name, or "Unknown"
// year: the year the quote was recorded or discovered

app.get("/quotes", (req, res) => {
  if (req.query.year) {
    db.all(
      `SELECT * FROM Quotes WHERE year = ${req.query.year}`,
      (err, rows) => {
        if (err) res.send(err.message);
        else res.json(rows);
      }
    );
  } else {
    db.all(`SELECT * FROM Quotes`, (err, rows) => {
      if (err) res.send(err.message);
      else res.json(rows);
    });
  }
});

app.get("/quotes/:id", (req, res) =>
  db.get(`SELECT * FROM Quotes WHERE rowid = ${req.params.id}`, (err, row) => {
    if (err) res.send(err.message);
    else res.json(row);
  })
);

app.post("/quotes", (req, res) => {
  db.run(
    `INSERT INTO Quotes VALUES ("${req.body.quote}", "${
      req.body.author
    }", ${parseInt(req.body.year, 10)})`,
    err => {
      if (err) res.send(err.message);
      else res.redirect("/");
    }
  );
});
