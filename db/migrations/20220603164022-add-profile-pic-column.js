module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'profile_picture_url', {
      type: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'profile_picture_url');
  },
};
