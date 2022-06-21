const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8080;

var data = require('./data/dummy.json');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// helper functions
function isValidProf(prof){
    console.log(prof.name);
    if (!prof || !prof.name || !prof.capstone || !prof.description){
        return false;
    }
    return true;
}

// requests
app.get('/', (req, res)=>{
    res.send('Success');
});

app.get('/save', (req, res)=>{
    let fs = require('fs');
    fs.writeFile('./data/dummy.json', JSON.stringify(data), function(err){console.log(err);});
    res.send('Saved State');
});

app.post('/addProf', urlencodedParser, (req, res)=>{
    try{
        let profile = JSON.parse(req.body.profile);
        if(!isValidProf(profile)){
            throw(`Invalid profile form ${profile}`);
        }
    } catch(err){
        // console.log(err);
        res.send(err);
        return;
    }
    let profile = JSON.parse(req.body.profile)
    profile['id'] = toString(data.currentID);
    data.currentID += 1;
    data.profiles[profile.id] = profile;
    res.send(`Added profile with name ${profile.name}`);
});

app.post('/reset', (req, res)=>{
    let fs = require('fs');
    fs.writeFile('./data/dummy.json', {profiles:{}, currentID:0}, function(err){console.log(err);});
    res.send('Data cleared.');
})

app.listen(PORT, ()=>{
    console.log(`Listening on localhost:${PORT}`);
});
