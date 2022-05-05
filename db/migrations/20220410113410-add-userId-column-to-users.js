module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'google_id', {
      type: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'google_id');
  },
};
