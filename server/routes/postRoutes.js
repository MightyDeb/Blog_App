const {Router} = require('express')
const router= Router()

router.get('/', (req,res)=>{
  res.json("This is our route")
})

module.exports = router