const { Router } = require('express')
const TransactionController = require('../controllers/TransactionController')


const router = Router()
/*
router.get('/api/v1/wallet', WalletController.listaWallets)
router.get('/api/v1/wallet/:id', WalletController.selecionaUmaWallet)
router.post('/api/v1/wallet', WalletController.criaWallet)
router.put('/api/v1/wallet/:id', WalletController.atualizaWallet)
router.delete('/api/v1/wallet/:id', WalletController.deletaWallet)
*/

module.exports = router