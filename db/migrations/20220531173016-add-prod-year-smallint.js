module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('cars', 'production_year', {
      type: Sequelize.DataTypes.SMALLINT,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('cars', 'production_year');
  },
};
