const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("database.db");

db.all("select * from contacts", (err, rows) => {
  if (err) console.log(`ERROR: ${err.message}`);
  else
    rows.forEach(row => {
      console.log(row.FirstName);
    });
});
