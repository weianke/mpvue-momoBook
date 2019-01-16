
const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const {bookid} = ctx.request.query
  const comments = await mysql('comments')
                    .select('comments.*', 'cSessionInfo.user_info')
                    .join('cSessionInfo', 'comments.openid', 'cSessionInfo.open_id')
                    .where('bookid', bookid)
  
  ctx.state.data = {
    list: comments.map(item => {
      const info = JSON.parse(item.user_info)
      return Object.assign({}, item, {
        title: info.nickName,
        image: info.avatarUrl
      })
    })
  }
}
