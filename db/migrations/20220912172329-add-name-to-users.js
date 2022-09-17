module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'display_name', {
      type: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'display_name');
  },
};
