module.exports = (sequelize, types) => {
  const Results = sequelize.define('Results', {
    commentId: {
      type: types.INTEGER,
      field: 'comment_id',
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: types.TEXT,
      field: 'content',
      allowNull: false,
    },
    likes: {
      type: types.INTEGER,
      field: 'likes',
    },
    dislikes: {
      type: types.INTEGER,
      field: 'dislikes',
    },
    votes: {
      type: types.INTEGER,
      field: 'votes',
    },
    avg: {
      type: types.INTEGER,
      field: 'avg',
    },
  }, {
    schema: 'public',
    tableName: 'results',
    timestamps: false,
  });

  Results.associate = function (models) {
    // const { Results, Comments } = models;
    // Results.belongsTo(Comments, {
    //   foreignKey: 'comment_id',
    //   sourceKey: 'comment_id',
    // });
  };
  return Results;
};
