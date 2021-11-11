module.exports = (sequelize, types) => {
  const Users = sequelize.define('Users', {
    username: {
      type: types.STRING(30),
      field: 'username',
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: types.STRING(50),
      field: 'email',
      allowNull: false,
      unique: true,
    },
    name: {
      type: types.STRING(60),
      field: 'name',
      allowNull: false,
    },
    birth: {
      type: types.DATE,
      field: 'birth',
      allowNull: false,
    },
    gender: {
      type: types.ENUM('fem', 'masc', 'other'),
      field: 'gender',
      allowNull: false,
    },
    password: {
      type: types.STRING(200),
      field: 'password',
      allowNull: true,
    },
    deleted: {
      type: types.BOOLEAN,
      defaultValue: false,
    },
  }, {
    schema: 'public',
    tableName: 'users',
    timestamps: false,
  });

  Users.associate = function (models) {
    const { Users, Votes } = models;
    Users.hasMany(Votes, { as: 'votes', foreignKey: 'user_id' });
  };
  return Users;
};
