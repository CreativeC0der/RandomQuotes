const express = require('express')
const connectDB = require("./db");
const quotes_model = require('./Quotes-model')
const mongoose = require('mongoose')
const { get_image } = require('./get_image');
const { send_mail } = require('./mail_service');


const app = express()
app.set('view engine', 'ejs')

//Middlewares
app.use(express.json());
app.use(express.static('./static'));

app.get('/get-quotes', async (req, res) => {
  try {
    await connectDB();
    const quotes = await quotes_model.aggregate([{ $sample: { size: 2 } }])
    console.log(quotes[0].author);
    quotes[0].image_link = await get_image(quotes[0].author);
    res.render('home', { quotes });
  }
  catch (e) {
    console.log(e.message);
  }
})

app.get('/likes/:objID', async (req, res) => {
  const id = req.params.objID;
  doc = await quotes_model.findById(id);
  doc.likes++;
  console.log(doc);
  let result = await doc.save()
  res.send(result);
})

app.post('/sendmail', async (req, res) => {
  console.log(req.body);
  try {
    const { mailId, quoteId } = req.body;
    const quote = await quotes_model.findById(quoteId);
    console.log(quote);
    const info = await send_mail(mailId, quote);
    console.log(info);
    res.send(info);
  }
  catch (e) {
    res.send(e.message);
  }
})

app.listen(3000, 'localhost', (err) => {
  if (!err)
    console.log('listening');
  else
    console.log(err);
})



