import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
