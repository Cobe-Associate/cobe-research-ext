const express = require('express')
const router = express.Router()
const request = require('request')

router.post('/sendmail', (req, res) => {
  console.info(JSON.stringify(req.body.body))
  request({
    url: req.body.url,
    method: req.body.method,
    headers: req.body.headers,
    json: req.body.body
  }, (error, response, body) => {
    if (body) {
      console.info(body)
    }
    if (error) {
      console.error(error)
      res.send(400, error)
    }
    res.send(200, true)
  })
})

module.exports = router