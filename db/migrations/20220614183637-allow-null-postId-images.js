module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('images', 'post_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('images', 'car_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
    });
  },

  async down(queryInterface) {
    await queryInterface.changeColumn('images', 'post_id', {
      allowNull: false,
    });
    await queryInterface.changeColumn('images', 'car_id', {
      allowNull: false,
    });
  },
};
