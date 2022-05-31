module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('cars', 'production_year', {
      type: Sequelize.DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.addColumn('cars', 'production_year');
  },
};
