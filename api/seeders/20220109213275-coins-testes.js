

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Coins', [
      {
        coin: 'BTC',
        fullname: 'Bitcoin',
        amont: 2.719,
        address_wallet: 01
      },
      {
        coin: 'ETH',
        fullname: 'Etherium',
        amont: 5.522,
        address_wallet: 02
      },
      {
        coin: 'BRL',
        fullname: 'Real',
        amont: 112,
        address_wallet: 01
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});
  }
};
