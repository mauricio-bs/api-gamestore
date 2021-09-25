module.exports = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PSSWD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    undescored: true,
    inderscoredAll: true,
  },
}
