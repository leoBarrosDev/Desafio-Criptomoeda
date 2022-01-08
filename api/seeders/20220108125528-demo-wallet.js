
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Wallets', [
      {
        address: 1,
        name: 'Leandro Barros',
        cpf: '06019679411',
        birthdate: '1987-02-09',
        coins: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 2,
        name: 'Thais Andrade',
        cpf: '10498555402',
        birthdate: '1994-05-14',
        coins: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 3,
        name: 'Cristiane Andrade',
        cpf: '12345678910',
        birthdate: '1980-05-11',
        coins: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 4,
        name: 'Camila Maria',
        cpf: '10987654321',
        birthdate: '2005-02-04',
        coins: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 5,
        name: 'Isabel Barros',
        cpf: '15975324681',
        birthdate: '2008-09-21',
        coins: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 2,
        name: 'Helder',
        cpf: '10498555402',
        birthdate: '1994-05-14',
        coins: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};
