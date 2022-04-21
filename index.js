import 'dotenv/config'
import express from "express";
import s3 from "./routes/s3"

const port = 3000
const app = express();

app.get('/', (req, res) => {
	res.json({ "hello": "world" })
})

app.use('/api', s3 );

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
