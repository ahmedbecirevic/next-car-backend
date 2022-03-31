module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      fuel_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mileage: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      production_year: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      vin: {
        type: Sequelize.STRING,
      },
      horse_power: {
        type: Sequelize.DOUBLE,
      },
      engine_displacement: {
        type: Sequelize.DOUBLE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('cars');
  },
};
