const http = require("http")
const FetchParser = require('./fetch');
var fetchClass = new FetchParser();
console.log("before")
//console.log("jsksksk", fetchClass.fetchParser())
fetchClass
    .fetchParser()
    .then(function (data) {
        console.log("jsksksk", data)
    })
