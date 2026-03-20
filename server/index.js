import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"

dotenv.config()

const app = express()

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}))

// Add COOP headers for Firebase popups
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups")
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp")
  next()
})

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀")
})

const PORT = process.env.PORT || 8000

connectDb()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})