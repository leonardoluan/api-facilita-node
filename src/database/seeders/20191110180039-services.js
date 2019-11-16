module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('services',
    [
      {
        id: 1,
        user_id: 1,
        ftype: 'Tecnologia',
        description: 'Teste',
        specialization: 'Formatação',
        price_type: 'Por Hora',
        price: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('services', null, {}),
};
