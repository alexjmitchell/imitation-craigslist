const router = require("express").Router()
const db = require("../db")

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id,name,post
  FROM posts;
  `

  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

router.post("/", (request, response, next) => {})

module.exports = router
