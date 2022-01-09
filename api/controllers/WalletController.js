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
                    where: { address: Number(id) }
                }
            )
            res.status(200).json(oneWallet)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    verificaMaiorIdade(dataNascimento) {

    }

    static validaCpf(numeroCpf) {
        let Soma = 0
        let Resto

        if (numeroCpf == '00000000000' || numeroCpf.length != 11) return false

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(numeroCpf.substring(i - 1, i)) * (11 - i)
        Resto = (Soma * 10) % 11

        if ((Resto == 10) || (Resto == 11)) Resto = 0
        if (Resto != parseInt(numeroCpf.substring(9, 10))) return false

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(numeroCpf.substring(i - 1, i)) * (12 - i)
        Resto = (Soma * 10) % 11

        if ((Resto == 10) || (Resto == 11)) Resto = 0
        if (Resto != parseInt(numeroCpf.substring(10, 11))) return false
        return true;
    }



    static async criaWallet(req, res) {
        const newWallet = req.body
        const cpfValido = WalletController.validaCpf(req.body.cpf)
        try {
            if (cpfValido == true) {
                const newWalletCreated = await database.wallet.create(newWallet)
                return res.status(201).json(newWalletCreated)
            } else {
                res.json({ mensagem: `o cfp ${req.body.cpf} não é válido` })
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaWallet(req, res) {
        const novosDados = req.body
        const { id } = req.params
        try {
            await database.wallet.update(novosDados, {
                where: { address: Number(id) }
            })
            const walletUpdated = await database.wallet.findOne(
                {
                    where: { address: Number(id) }
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
                    address: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `A Wallet ${id} foi deletada com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}


module.exports = WalletController