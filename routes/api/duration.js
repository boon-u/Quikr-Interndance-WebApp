const express = require('express');
const router = express.Router();

//bring in the model
const Duration = require("../../models/Duration");

// @ route GET  api/duration
// desc         Get Duration
// @access      Public

router.get('/:id', (req, res) => {

    var id = req.params.id;
    console.log("duration id is",req.params.id);
    Duration.find({
        'emp_ID' : id
    }, function(err, result){
        if(err) throw err;
        if(result){
            res.json(result);
            console.log("if result", result);
           }
            // document.getElementById("display").innerHTML = `<h1> Hi Boon </h1>`;
            else{
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
})


router.get('/', (req,res) => {

    Duration.find( {}, function(err, duration){
        if(err){    
            res.send("Something went wrong !!");
            next();
        }
        
        console.log(duration);
        res.send(duration);
    });

});


// @route POST  api/duration
// @desc        Send data
// @access      Public

router.post('/', (req, res) => {

    console.log(req.body);

    const { emp_ID, in_time, out_time} = req.body;

    try {
        
        // find if a emp exits
        //let user = User.findOne( {emp_ID });

        let duration = new Duration({
            emp_ID,
            in_time,
            out_time
        });

        duration.save();


    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }



    res.send('Duration Route')
});





module.exports = router;