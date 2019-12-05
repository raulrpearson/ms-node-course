# ms-node-course

> Building Functional Prototypes using Node.js

This is a small repository holding the code I wrote by following Microsoft's
course on edX
[Building Functional Prototypes using Node.js](https://www.edx.org/course/building-functional-prototypes-using-nodejs).

It includes a basic Node.js/Express server working with an SQLite database file.
The final application provides a RESTful API (although I'm not sure it does in
the most purist definition of
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)).

The course covered the basics of:

- Developing an API server with Node.js and Express
- SQL syntax and using SQLite as a database engine

The API exposes the following endpoints:

- GET `/quotes` returns an array of quote objects in JSON format
- GET `/quotes/:id` returns the quote with id equal to `:id`
- POST `/quotes` adds a quote to the database, the body of the request should be
  a JSON object with the fields `quote`, `author` and `year`, this last one
  being an integer

Suffice to say that this implementation is not robust at all and was not meant
to be—it's just an exploration that I used to refresh some topics in my head.

I didn't bother with deployment to Azure. I might extend the code in the future
and deploy somewhere, but I'm moving on to other projects at the moment.
