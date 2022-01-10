const database = require('../models')

class TransactionController {
    static async listaTransactions(req, res) {
        try {
            const todasAsTransactions = await database.transaction.findall()
            return res.status(200).json(todasAsTransactions)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selecionaUmaTransaction(req, res) {
        const { id } = req.params
        try {
            const oneTransaction = await database.transaction.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            res.status(200).json(oneTransaction)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async criaTransaction(req, res) {
        const newTransaction = req.body
        try {
            const newTransactionCreated = await database.transaction.create(newTransaction)
            return res.status(201).json(newTransactionCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTransaction(req, res) {
        const novosDados = req.body
        const { id } = req.params
        try {
            await database.transaction.update(novosDados, {
                where: { id: Number(id) }
            })
            const transactionUpdated = await database.transaction.findOne(
                {
                    where: { id: Number(id) }
                }
            )
            return res.status(200).json(transactionUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTransaction(req, res) {
        const { id } = req.params
        try {
            await database.transaction.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `A Transaction ${id} foi deletada com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TransactionController