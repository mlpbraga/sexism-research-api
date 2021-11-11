module.exports = (sequelize, types) => {
  const Comments = sequelize.define('Comments', {
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
    replyTo: {
      type: types.TEXT,
      field: 'reply_to',
    },
    newsId: {
      type: types.INTEGER,
      field: 'news_id',
      allowNull: false,
    },
    deleted: {
      type: types.BOOLEAN,
      defaultValue: false,
    },
  }, {
    schema: 'public',
    tableName: 'comments',
    timestamps: false,
  });

  Comments.associate = (models) => {
    const {
      Comments, News, Votes, Results,
    } = models;
    Comments.belongsTo(News, {
      foreignKey: 'news_id',
      sourceKey: 'news_id',
    });
    Comments.hasMany(Votes, {
      foreignKey: 'comment_id',
    });
    Comments.belongsTo(Results,
      {
        foreignKey: 'comment_id',
        sourceKey: 'comment_id',
      });
  };

  return Comments;
};
