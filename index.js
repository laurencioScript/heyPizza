const express = require('express')
const app = express()
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/slack/events', function (req, res) {
  console.log('>>> req.body',req.body);
  return req.body;
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)