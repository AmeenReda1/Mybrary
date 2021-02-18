const express = require('express');
const auhtor = require('../models/auhtor');
const router = express.Router();
const Author=require('../models/auhtor')

//All Author routes
router.get('/',(req,res,next)=>{
    let searchOption={}
    if(req.query.name !=null && req.query.name!==''){
        searchOption.name=new RegExp(req.query.name,'i')
    }
    try{
        Author.find(searchOption)
        .exec()
        .then(authors=>{
            console.log(authors)
            res.render('authors/index',{
                
                authors:authors,
                searchOption:req.query
            }
            )
        })
    }
    catch{
        
    }
    
})
router.get('/new',(req,res)=>{
    res.render('authors/new',{authors:new Author() })
  
})
//create Author route
router.post('/',(req,res,next)=>{
    const author=new Author({
        name:req.body.name,
        
    })
    try{
        author.save()
        res.redirect('authors')
    }
    catch{
        
        res.render('authors/new',{
            authors:author,
            errorMessage:'Error create Author'
            })
    }
    
    // author.save()
    // .then(auhtor=>{
    //     if(author){
    //         // res.redirect(`authors/${newAuthor.id}`)
    //         res.redirect(`authors`)
    //     }
    //     else{
            
    //         res.render('auhtors/new',{
    //             auhtor:'',
    //             errorMessage:'Error create Author'
    //         })
    //     }
    // })
 
})
module.exports = router;