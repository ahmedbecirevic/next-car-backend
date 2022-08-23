module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchase_history', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('REQUESTED', 'FINISHED'),
        allowNull: true,
      },
      listing_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('purchase_history');
  },
};
