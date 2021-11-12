module.exports = (sequelize, types) => {
  const News = sequelize.define('News', {
    newsId: {
      type: types.INTEGER,
      field: 'news_id',
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: types.TEXT,
      field: 'title',
      allowNull: false,
    },
    link: {
      type: types.STRING(512),
      field: 'link',
      allowNull: false,
    },
    description: {
      type: types.STRING(500),
      field: 'description',
      allowNull: true,
    },
    deleted: {
      type: types.BOOLEAN,
      defaultValue: false,
    },
  }, {
    schema: 'public',
    tableName: 'news',
    timestamps: false,
  });

  return News;
};
