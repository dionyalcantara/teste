import express from 'express'
import cors from 'cors'
import registerRouter from './routers/registerRouter'
import loginRouter from './routers/loginRouter'
import profileRouter from './routers/profileRouter'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  })
)

app.use(express.json())

app.use(registerRouter)
app.use(loginRouter)
app.use(profileRouter)

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

export default app
