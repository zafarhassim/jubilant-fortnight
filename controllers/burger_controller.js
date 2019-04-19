var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req,res)  {
    burger.selectAll((data) =>  {
        var hbsObject = {
            burgers: data
        }
        res.render('index', hbsObject);
    })
});

router.post("/burgers", (req,res) =>  {
    burger.insertOne(req.body.burger_name, (data) =>  {
       res.redirect("/");
    })
})

router.post("/burgers/:id", (req,res) =>  {
    
    burger.updateOne(req.params.id, () =>  {
            if (res.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.redirect("/")
          }
        
    })
})

router.post("/trash", (req,res) =>  {
    burger.throwTrash();
    res.status(201)
})

router.post("/clear/:id", (req,res) =>  {
    burger.throwOne(req.params.id, () =>  {
        if (res.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.redirect("/")
          }
    })
})
module.exports = router;