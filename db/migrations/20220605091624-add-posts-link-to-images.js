module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('images', 'post_id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('images', 'post_id');
  },
};
