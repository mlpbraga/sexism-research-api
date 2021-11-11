module.exports = (sequelize, types) => {
  const UserGender = sequelize.define('UserGender', {
    userId: {
      primaryKey: true,
      type: types.STRING(100),
      field: 'user_id',
      allowNull: false,
    },
    gender: {
      type: types.STRING(50),
      field: 'gender',
      allowNull: false,
      unique: true,
    },
  }, {
    schema: 'public',
    tableName: 'user_gender',
    timestamps: false,
  });
  return UserGender;
};
