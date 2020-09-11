module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('tutorial', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    onSale: {
      type: Sequelize.BOOLEAN
    }
  })
  return Product
}
