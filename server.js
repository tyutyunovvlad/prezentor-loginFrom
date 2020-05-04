const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)


server.use(jsonServer.rewriter({
  // '/mails/:id' : '/'
}))

server.get(`/mails/:id`, (req, res) => {

  let email = router.db
    .get('mails')
    .find({email: req.params.id})
    .value()
    
  if (email) {
    res.jsonp({exist:true})
  } else {
    res.jsonp({exist:false})
  }
})





server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is pucking')
})

