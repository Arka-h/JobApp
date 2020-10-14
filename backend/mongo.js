const { dbName, dbPassword } = require('./config')
module.exports = `mongodb+srv://admin:${dbPassword}@cluster0.zmjdd.mongodb.net/${dbName}?retryWrites=true&w=majority`