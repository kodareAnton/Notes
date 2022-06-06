var express = require('express');
var router = express.Router();

// Hämtar hem alla Posts
router.get('/', function(req, res, next) {
  
  req.app.locals.con.connect(function(err) {
    if(err){
      console.log(err);
    }
    let sql = "SELECT * FROM `posts`";
    req.app.locals.con.query(sql, function(err, result){
      if (err){
        console.log(err);
      }
      console.log('result', result);
      res.send(result)
    })
  })
});

// Lägger till nya Posts

// Ändra gammal Posts // PUT

// DELETE Posts ändra till att inte synas



module.exports = router;
