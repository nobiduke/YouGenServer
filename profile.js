const {v4: uuidv4} = require('uuid');

function editProf(id, type, value){
    switch(type){
        case 'name':

    }
}

function genProf(name){
    id = uuidv4();

    return makeProf(id, name);
}

function makeProf(id, name='John Smith', description=null, elo=null , rank=null , location=null, capstone=null, pictures=null){
    return {
        id:id,
        name:name,
        description:description,
        elo:elo,
        rank:rank,
        location:location,
        capstone:capstone,
        pictures:pictures
    }
}