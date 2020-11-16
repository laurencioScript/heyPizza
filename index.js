const express = require('express')
const app = express()
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/slack/events', function (req, res) {
  console.log('>>> req.params',req.params);
  console.log('>>> req.body',req.body);
  console.log('>>> req.query',req.query);
  return req.params;
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)