const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/test', (req, res) => {
  res.json('test')
})

// server.get('/mails', (req, res) => {
  
// })

// router.render = (req, res) => {
//   res.jsonp({
//     body: res.locals.data
//   })
// }


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})