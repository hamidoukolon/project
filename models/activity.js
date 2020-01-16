module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bodypart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reps: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  return Activity;
};
