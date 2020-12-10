const express = require('express');
const booksRouter=express.Router();


var books=[
    {
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'Cartoon',
        img:"tom.jpg"
    },
    {
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'Fantacy',
        img:"harry.jpg"
    },
    {
        title:'Paathummayude Aadu',
        author:'V M Basheer',
        genre:'Drama',
        img:"basheer.jpg"
    },
    {
        title:'Randamoozham',
        author:'M T Vasudevan Nair',
        genre:'Noval',
        img:"randam1.jpg"
    },
    {
        title:'Aadujeevitham',
        author:'Benyamin',
        genre:'Noval',
        img:"aadujeevi2.jpg"
    },
    {
        title:'Khasakkite Ithihasam',
        author:'O V Vijayan',
        genre:'Noval',
        img:"khasa3.jpg"
    },
    {
        title:'The Guide',
        author:'R K Narayan',
        genre:'Classic Noval',
        img:"guide4.jpg"
    },
    {
        title:'Train To Pakistan',
        author:'Khushwant Sigh',
        genre:'Noval',
        img:"train5.jpg"
    },
    {
        title:'Anna Karenina',
        author:'Leo Tolstoy',
        genre:'Noval',
        img:"anna6.jpg"
    },
    {
        title:'Hamlet',
        author:'William Shakespeare',
        genre:'Skakespearean Tragedy',
        img:"hamlet7.jpg"
    },
]
booksRouter.get('/',function(req,res){
    res.render("books",{
 
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addbook",name:"Add Book"}],
        title:'Library',
        books
    });

});

booksRouter.get('/:id',function(req,res){
    const id=req.params.id
    res.render('book',{
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:'Library',
        book:books[id]
    })
})

module.exports=booksRouter;