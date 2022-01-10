

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Transactions', [
      {
        value: 1.279,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 2,
        receivefrom: 5,
        coin_id: 1,
        wallet_address: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1.753,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 1,
        receivefrom: 4,
        coin_id: 2,
        wallet_address: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        value: 1.153,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 3,
        receivefrom: 2,
        coin_id: 3,
        wallet_address: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1.759,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 4,
        receivefrom: 5,
        coin_id: 1,
        wallet_address: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1.456,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 5,
        receivefrom: 6,
        coin_id: 1,
        wallet_address: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1.741,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 6,
        receivefrom: 7,
        coin_id: 2,
        wallet_address: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 1.258,
        datetime: new Date(),
        currentcotation: 0.0123,
        sendto: 2,
        receivefrom: 3,
        coin_id: 1,
        wallet_address: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});
  }
};
