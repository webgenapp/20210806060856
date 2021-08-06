const express = require('express')
const router = express.Router()
const { Gogi } = require('../../../../models')
const { auth } = require('../../../../middlewares/auth')

router.get('/', auth, async function (req, res, next) {
  const gogis = await Gogi.findAll()

  res.send(gogis)
})

router.get('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const gogi = await Gogi.findOne({ where: { id } })

  res.send(gogi)
})

router.post('/', auth, async function (req, res, next) {
  const gogi = await Gogi.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(gogi)
})

router.delete('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  await Gogi.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const gogi = await Gogi.findOne({ where: { id } })

  gogi.type = req.body.type

  gogi.save()

  res.send(gogi)
})

module.exports = router
