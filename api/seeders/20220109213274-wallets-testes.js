
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Wallets', [
      {
        name: 'Leandro Barros',
        cpf: '43016466201',
        birthdate: '1987-02-09',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thais Andrade',
        cpf: '47546458471',
        birthdate: '1994-05-14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cristiane Andrade',
        cpf: '78931466722',
        birthdate: '1980-05-11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camila Maria',
        cpf: '68172428430',
        birthdate: '2000-02-04',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabel Barros',
        cpf: '43468669569',
        birthdate: '1999-09-21',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Helder',
        cpf: '75211611730',
        birthdate: '1994-05-14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Teste de usuario',
        cpf: '84573511334',
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
