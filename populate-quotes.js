const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("quotes.db");

db.serialize(() => {
  // Assumes that a table named Quotes exists. If it doesn't the script will
  // fail. I haven't figured out yet how to go about that, but I believe it will
  // be adding a callback to run to handle the error so that we can continue the
  // execution
  db.run(`DROP TABLE Quotes`);
  db.run(`CREATE TABLE Quotes (quote TEXT, author TEXT, year)`);
  db.run(`INSERT INTO Quotes VALUES ("Life is short", "Unknown", 1902)`);
  db.run(
    `INSERT INTO Quotes VALUES ("Be yourself; everyone else is already taken.", "Oscar Wilde", 2000)`
  );
  db.run(
    `INSERT INTO Quotes VALUES ("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Alber Einstein", 1930)`
  );
  db.run(
    `INSERT INTO Quotes VALUES ("So many books, so little time.", "Frank Zappa", 1910)`
  );
});

db.all(`SELECT * FROM Quotes;`, (err, rows) => {
  if (err) console.log(`ERROR: ${err.message}`);
  else
    rows.forEach(row =>
      console.log(`${row.quote} - ${row.author}, ${row.year}`)
    );
});
