const express = require("express")
const { Router } = require("express")

const router = Router()

router.get('/', (req,res,next) => {
    let respuesta = "Funciona coneccion con front"
    let respuestaJSON = JSON.parse(respuesta)
    res.send(respuestaJSON)
})

module.exports = router