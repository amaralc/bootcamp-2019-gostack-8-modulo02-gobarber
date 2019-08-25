module.exports = {
  dialect: 'postgres', // https://sequelize.org/master/manual/dialects.html
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
