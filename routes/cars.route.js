const router = require('express').Router();
const mongoose = require('mongoose');
const collection = require('../db').Page;

router.route('/cars')
    .get((req,res)=>{
        collection.find()
            .exec()
            .then(docs => {
                console.log(docs);
                res.status(200).json(docs);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });
    })
    .put((req,res)=>{

        collection.findByIdAndUpdate(req.body._id, req.body)
            .exec()
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });
    })
    .post((req,res) => {
        const page = new collection({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            body: req.body.body
        });
        page.save().then( result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST requests to /pages',
                CreatedPage: page
            });
        })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });

    });