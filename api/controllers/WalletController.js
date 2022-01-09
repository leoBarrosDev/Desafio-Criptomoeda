const database = require('../models')

class WalletController {
    static async listaWallets(req, res) {
        try {
            const todasAsWallets = await database.wallet.findAll()
            return res.status(200).json(todasAsWallets)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async selecionaUmaWallet(req, res) {
        const { id } = req.params
        try {
            const oneWallet = await database.wallet.findOne(
                {
                    where: { id: Number(id) }
                }
            )
            res.status(200).json(oneWallet)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaWallet(req, res) {
        const newWallet = req.body
        try {
            const newWalletCreated = await database.wallet.create(newWallet)
            return res.status(200).json(newWalletCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaWallet(req, res) {
        const novosDados = req.body
        const { id } = req.params
        try {
            await database.wallet.update(novosDados, {
                where: { id: Number(id) }
            })
            const walletUpdated = await database.wallet.findOne(
                {
                    where: { id: Number(id) }
                }
            )
            return res.status(200).json(walletUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaWallet(req, res) {
        const { id } = req.params
        try {
            await database.wallet.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `A Wallet ${id} foi deletada com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}


module.exports = WalletController