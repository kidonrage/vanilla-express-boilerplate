import Router from 'express'

const router = Router()

router.get('*', (req, res) => {
  res.send({
    message: 'Here you can see message data from api. Your app works!'
  })
})

export default router