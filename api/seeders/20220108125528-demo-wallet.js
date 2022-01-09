
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Wallets', [
      {
        name: 'Leandro Barros',
        cpf: '06019679411',
        birthdate: '1987-02-09',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thais Andrade',
        cpf: '10498555402',
        birthdate: '1994-05-14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cristiane Andrade',
        cpf: '12345678910',
        birthdate: '1980-05-11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camila Maria',
        cpf: '10987654321',
        birthdate: '2005-02-04',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabel Barros',
        cpf: '15975324681',
        birthdate: '2008-09-21',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Helder',
        cpf: '10498555402',
        birthdate: '1994-05-14',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};
