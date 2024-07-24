const express = require("express");
const cors = require("cors");
const uploadImage = require("./uploadImage.js");
const app = express();

//routers
const routerproduct=require('./routes/productroute.js')
const routeruser=require('./routes/userrouter.js')


const port = 3000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "99mb" }));








app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

app.post("/uploadMultipleImages", (req, res) => {
  uploadImage
    .uploadMultipleImages(req.body.images)
    .then((urls) => res.send(urls))
    .catch((err) => res.status(500).send(err));
});

//router of product
app.use('/api/products',routerproduct)

// router of user
app.use('/api/user',routeruser)

// app.use('/api/user',routeruser)


app.listen(port, () => {
  console.log(` listening at http://localhost:${port}`);
});
