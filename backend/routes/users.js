var express = require("express");
var router = express.Router();
var mysql = require("mysql2");

// Hämtar hem alla Posts
router.get("/", function (req, res, next) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }
    let sql = "SELECT * FROM `posts`";
    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("result");

      res.send(result);
    });
  });
});

// Hämtar saker med hjälp av id
router.get("/:id", function (req, res) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }
    let sql = "SELECT * FROM posts WHERE id IN ('" + req.params.id + "')";
    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result[0]);
    });
  });
});

const connection = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "notesdb",
});

// Lägger till nya Posts
router.post("/add", async (req, res) => {
  try {
    connection.execute(
      "INSERT INTO Posts (title, description) VALUES (?, ?)",
      [req.body.title, req.body.description],
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        console.log(result);
        res.json("Ny Post sparad");
      }
    );
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
});

// Ändra Posts // PUT
router.put('/:id', function(req,res,next){
  try {
    connection.execute(
      "UPDATE posts SET title = ?, description = ? WHERE id = ?;",
      [req.body.title, req.body.description, req.params.id],
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        console.log(result);
        res.json("Ny Post sparad");
      }
    );
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
    

});

module.exports = router;
