const { Router } = require('express')
const TransactionController = require('../controllers/TransactionController')


const router = Router()

router.get('/api/v1/transaction', TransactionController.listaTransactions)
router.get('/api/v1/transaction/:id', TransactionController.selecionaUmaTransaction)
router.post('/api/v1/transaction', TransactionController.criaTransaction)
router.put('/api/v1/transaction/:id', TransactionController.atualizaTransaction)
router.delete('/api/v1/transaction/:id', TransactionController.deletaTransaction)


module.exports = router