const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send('Success');
})

app.listen(PORT, ()=>{
    console.log(`Listening on localhost:${PORT}`);
});
