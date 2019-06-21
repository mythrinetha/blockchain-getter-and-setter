 const express = require('express')
const app = express();

 //var Web3=require('web3');


 	
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});