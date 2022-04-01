module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cars',
          key: 'id',
        },
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('images');
  },
};
