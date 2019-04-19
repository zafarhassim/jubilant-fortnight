
const orm = require("../config/orm.js")

var burger = {
    selectAll: (cb) => {
        orm.selectAll(function(res) {
            cb(res);
        })
        
    },
    insertOne: (name,cb) =>  {
        orm.insertOne(name, function(res) {
            cb(res);
        })
    },
    updateOne: (id,cb) =>  {
        orm.updateOne(id, function(res)  {
            cb(res)
        })
    },
    throwTrash: () => {
        orm.throwTrash();
    },
    throwOne: (id,cb) =>  {
        orm.throwOne(id, function(res)  {
            cb(res);
        });

    }
}

module.exports = burger