const router = require("express").Router()
const db = require("../db")

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id,name,parent_id,slug
  FROM categories
  WHERE parent_id IS NULL;
  `

  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
