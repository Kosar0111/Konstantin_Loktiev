import express from "express";
import mongoose from "mongoose"
import router from "./router.js";
import fileUpload from "express-fileupload"


const PORT = 5000;
const DB_URl = 'mongodb + srv://kosar1985:Lois1985@cluster0.od8okhx.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URl, { useUnifidTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('server is ok ' + PORT))
    } catch (e) {
        console.log(e);

    }
}

startApp()
startApp()

