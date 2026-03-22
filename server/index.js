import express from "express"

const app = express ()


const PORT = 8000

app.get("/",(req,res)=>{
    return res.json({message:"Server started"})
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})