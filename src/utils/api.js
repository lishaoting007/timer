export default {
  // sendCode: '/phoneValidator', // 发送验证码
  // register: '/register', // 注册接口
  // login: '/login_html', // 登录接口
  // getUser: '/user', // 获取用户信息
  // changeUser: '/user', // 修改用户信息
  // changePassword: '/changePassword', // 修改密码
  // getNewestData: '/todo/all' // 获取最新数据
  sendCode: '/code',
  register: '/user/register',
  login: '/user/login',
  getUser: '/user',
  changeUser: '/user',
  changePassword: '/user/changePassword',
  getNewestData: '/todo', // 根据用户Id获取所有已完成的todo及总时间
  getRanking: '/ranking',
  addTodo: '/todo'
}
