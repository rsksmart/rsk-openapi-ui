const path = require('path')

const getDistPath = () => path.resolve(__dirname, 'dist')

module.exports = { getDistPath }