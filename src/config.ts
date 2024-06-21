module.exports = {
  jwtSecretKey: 'MyNode',
  expiresIn: '10h',
  whiteList: ['/api/login', '/api/regUser']
}
export default module.exports;