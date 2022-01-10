const { Router } = require('express')
const CoinController = require('../controllers/CoinController')


const router = Router()

router.get('/api/v1/coin', CoinController.listaCoins)
router.get('/api/v1/coin/:id', CoinController.selecionaUmaCoin)
router.post('/api/v1/coin', CoinController.criaCoin)
router.put('/api/v1/coin/:id', CoinController.atualizaCoin)
router.delete('/api/v1/coin/:id', CoinController.deletaCoin)
router.get('/api/v1/coin/:id/transaction/:id', CoinController.selecionaUmaTransaction)
router.get('/api/v1/coin/:id/transaction', CoinController.listaTransactions)


module.exports = router