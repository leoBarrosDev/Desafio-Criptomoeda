const database = require('../models')

class CoinController {
    static async listaCoins(req, res) {
        try {
            const todasAsCoins = await database.coin.findall()
            return res.status(200).json(todasAsCoins)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selecionaUmaCoin(req, res) {
        const { id } = req.params
        try {
            const oneCoin = await database.coin.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            res.status(200).json(oneCoin)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async criaCoin(req, res) {
        const newCoin = req.body
        try {
            const newCoinCreated = await database.coin.create(newCoin)
            return res.status(201).json(newCoinCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCoin(req, res) {
        const novosDados = req.body
        const { id } = req.params
        try {
            await database.coin.update(novosDados, {
                where: { id: Number(id) }
            })
            const coinUpdated = await database.coin.findOne(
                {
                    where: { id: Number(id) }
                }
            )
            return res.status(200).json(coinUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaCoin(req, res) {
        const { id } = req.params
        try {
            await database.coin.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `A Coin ${id} foi deletada com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selecionaUmaTransaction(req, res) {
        const { transactionId, coinId } = req.params
        try {
            const oneTransaction = await database.transactions.findOne(
                {
                    where: {
                        id: Number(transactionId),
                        coin_id: Number(coinId)
                    }
                }
            )
            return res.status(200).json(oneTransaction)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async listaTransactions(req, res) {
        const { coinId } = req.params
        try {
            const allTransactions = await database.transactions.findall(
                {
                    where: {
                        coin_id: Number(coinId)
                    }
                }
            )
            return res.status(200).json(allTransactions)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

}

module.exports = CoinController