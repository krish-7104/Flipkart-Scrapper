const express = require("express")
const FlipkartSearchProduct = require("./flipkart")

const app = express()


app.get("/flipkart", FlipkartSearchProduct)


app.listen(4000, () => {
    console.log(`Server Listening on PORT:4000`)
})