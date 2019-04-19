const connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb)  {
        
            connection.query("SELECT * FROM burgers", (err,res) =>  {
                if(err) throw err;
                cb(res);
            })
    },
    insertOne: function(name,cb)  {
            connection.query("INSERT INTO burgers SET ?",
            {
                burger_name: name
            }, function(err,res)  {
                if(err) throw err
                cb(res);
            })
    },
    updateOne: function(id,cb)  {
            connection.query("UPDATE burgers SET ? WHERE ?",
            [{
                devoured: true
            },  {
                id: id
            }], function(err,res)  {
                if(err) throw err
                cb(res);
            })
    },
    throwTrash: () =>  {
        connection.query("DELETE FROM burgers WHERE devoured=true", function(err,res)  {
            if(err) throw err;
        })
    },
    throwOne: (id,cb) =>  {

        connection.query("DELETE FROM burgers WHERE id=?", [id], function(err,res)  {
            if(err) throw err;
            cb(res);
        })
    }
}
module.exports = orm;


