const express = require('express');
const addbookRouter=express.Router();


addbookRouter.get('/',function(req,res){
    res.render("addbook",{
 
        nav:[{link:"/books",name:"Books"}],
        title:'Library',
    });

});

module.exports=addbookRouter;