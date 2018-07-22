const axios = require("axios");
const fs = require("fs");
const mongoose = require('mongoose');
class FetchParser {
    constructor() {
        this.connectDB();

    }
    init() {}
    async fetchParser(db) {
        var data = await JSON.parse(fs.readFileSync('config.json', 'utf8'));
        //console.log(data)
        for (const item of data) {
            var content = await this.requestUrl(item.url);
            console.log("content", db.showDatabases());

        }
        console.log("Not waiting")

    }
    async connectDB() {
        console.log("Db connection");
        var _this = this;
        mongoose.connect('mongodb://localhost/mongofetch');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
            console.log("connected");
            _this.fetchParser(db);
        });

    }

    async requestUrl(url) {

        return await axios.get(url);
    }
}
module.exports = new FetchParser()