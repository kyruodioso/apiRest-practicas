const {Router}= require ('express');
const router= Router();
const _ = require('underscore');

const moviesdata =require('../sample.json')

router.get('/',(req,res)=>{
    res.json(moviesdata);
});

router.post('/',(req,res)=>{
    const{title,director,year, rating}=req.body;
    if(title && director && year && rating){
        const id=moviesdata.length + 1;
        const newMovie={...req.body, id};
        moviesdata.push(newMovie);
        res.json(moviesdata);
    }else{
        res.send('Error Request');
    }}
    );

    router.put('/:id', (req,res)=>{
        const {id}= req.params;
        const{title,director,year,rating}=req.body;
        if(title && director && year && rating){
            _.each(moviesdata,(movie,i)=>{
                if(movie.id == id){
                    movie.title= title;
                    movie.director= director;
                    movie.year= year;
                    movie.rating= rating;
                }
            });
            res.json(moviesdata);
        }else{
            res.status(500).json({error:' There was an error.'})
        }    
    })

    router.delete('/:id',(req,res)=>{
         const {id}= req.params;
         _.each(moviesdata,(movie,i)=>{
             if(movie.id == id){
                 moviesdata.splice(i,1)
             }
         } )
         res.send(moviesdata);
    })


module.exports= router;