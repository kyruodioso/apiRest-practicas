const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const data ={
        "name":"Fazt",
        "website":"web"
    }
    res.json(data);
})

module.exports= router;