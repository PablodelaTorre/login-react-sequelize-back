const express = require("express")
const { Router } = require("express")

const router = Router()

router.get('/', (req,res,next) => {
    res.send("Api funcionando")
})

module.exports = router