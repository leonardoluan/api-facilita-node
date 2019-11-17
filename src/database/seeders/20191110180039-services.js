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
        price: 130.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 2,
        type: 'Mecânica',
        description: 'Manutenção em motores antigos',
        specialization: 'Motores antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        user_id: 3,
        type: 'Tecnologia',
        description: 'Teste',
        specialization: 'Formatação',
        price_type: 'Por Hora',
        price: 130.00,
        created_at: new Date(),
        updated_at: new Date(),
      }

    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('services', null, {}),
};
