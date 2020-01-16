module.exports = (sequelize, DataTypes) => {
  const BMI = sequelize.define('BMI', {
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: false,
    },
  });

  return BMI;
};
