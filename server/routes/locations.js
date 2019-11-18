const router = require("express").Router()
const db = require("../db")

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id,abbreviation,full_name
  FROM states;
  `

  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
