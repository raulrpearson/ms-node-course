const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");

const port = 3000;
const app = express();
const db = new sqlite3.Database("quotes.db");

app.listen(port, () => console.log(`Express app listening on port ${port}...`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello, World!"));

// id: a unique number to reference the quote
// quote: a string containing the quote itself
// author: a string containing the author's first and last name, or "Unknown"
// year: the year the quote was recorded or discovered

const sampleQuotes = [
  {
    id: 0,
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    year: 2000
  },
  {
    id: 1,
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    year: 1930
  },
  {
    id: 2,
    quote: "So many books, so little time.",
    author: "Frank Zappa",
    year: 1910
  }
];

app.get("/quotes", (req, res) => {
  if (req.query.year) {
    res.send(`TODO: return a list of quotes from the year ${req.query.year}`);
  } else {
    res.json(sampleQuotes);
  }
});

app.get("/quotes/:id", (req, res) => res.json(sampleQuotes[req.params.id]));

app.post("/quotes", (req, res) => {
  let newQuote = {
    id: sampleQuotes.length,
    quote: req.body.quote,
    author: req.body.author,
    year: parseInt(req.body.year, 10)
  };
  sampleQuotes.push(newQuote);
  res.json(newQuote);
});
