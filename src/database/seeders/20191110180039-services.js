module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('services',
    [
      {
        id: 1,
        user_id: 1,
        name: 'Matheus Paice',
        type: 'Tecnologia',
        description: 'Teste',
        specialization: 'Formatação',
        price_type: 'Por Hora',
        price: 'R$ 12,99',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('services', null, {}),
};
