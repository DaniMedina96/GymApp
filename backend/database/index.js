const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
{
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

const checkDB = async () => {
  try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
  } 
catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

const sycnModels = async () => {
  try {
    await connection.sync()
    console.log('Models synced');
  } catch (error) {
    console.log(error);
  }
} 

module.exports = {
  connection,
  checkDB,
  sycnModels
}