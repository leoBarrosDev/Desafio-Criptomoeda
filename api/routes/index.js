const bodyParser = require('body-parser')
const wallets = require('./walletsRoute')
const coins = require('./coinsRoute')
const transactions = require('./transactionsRoute')



module.exports = app => {
    app.use(bodyParser.json())
    app.use(wallets)

}