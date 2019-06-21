const express = require('express');
const router = express.Router();
var cors = require('cors');

//bring in the model
const User = require("../../models/Users");

// @route GET  api/users
// @desc       Retrieve Data
// @access     Public

router.get('/:id', cors(), function(req, res) {
    var id = req.params.id;

    User.find({
        // '_id' : id
        emp_ID : id
    }, function(err, result){
        if(err) throw err;
        if(result){
            res.json(result);
            // console.log(result);
        }
        else{
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
})


router.get('/', (req, res) => {

    
    User.find( {} , function(err, users){
        if(err){
            res.send('No user found with that emp_ID !!');
            next();
        }
        console.log(41, users);
        res.json(users);

    });

});


// @route POST  api/users
// @desc        Send data
// @access      Public

router.post('/', (req, res) => {

    // console.log(req.body);

    const { emp_ID, emp_Name, Ph_no } = req.body;

    try {
        
        // find if a emp exits
        //let user = User.findOne( {emp_ID });

        let user = new User({
            emp_ID,
            emp_Name,
            Ph_no
        });

        console.log(user);
        user.save();


    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }



    res.send(req.body);
});


module.exports = router;