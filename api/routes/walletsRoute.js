const { Router } = require('express')
const WalletController = require('../controllers/WalletController')


const router = Router()

router.get('/api/v1/wallet', WalletController.listarWallets)
router.get('/api/v1/wallet/:id', WalletController.selecionarUmaWallet)
router.post('/api/v1/wallet', WalletController.criarWallet)
router.put('/api/v1/wallet/:id', WalletController.atualizarWallet)
router.delete('/api/v1/wallet/:id', WalletController.deletarWallet)

module.exports = router