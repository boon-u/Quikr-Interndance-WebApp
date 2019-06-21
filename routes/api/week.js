const express = require('express');
const router = express.Router();

//bring in the model
const mob_app = require("../../models/mob_app_schema");


router.get('/', (req,res) => {

    mob_app.find( {}, function(err, duration){
        if(err){
            res.send("Something went wrong !!");
            next();
        }
        console.log(duration);
        res.send(duration);
    });
});


router.get('/:id', (req, res) => {

        var id = req.params.id;
        console.log("mobile app's id is",req.params.id);
        mob_app.find({
            emp_ID : id
        }, function(err, result){
            if(err) throw err;
            if(result){
                res.json(result);
               
            }
                else{
                res.send(JSON.stringify({
                    error: 'Error'
                }))
            }
        })
    })

    
    router.put('/:id', function(req, res) { 

        if (req.params.id) { // if emp_ID exist in db
    
            var date = new Date();
            var today_date = (date.getMonth() + 1) + '/' + (date.getDate()) + '/' +  date.getFullYear();

            var current_time = date.getHours() + ":" + date.getMinutes();

            console.log(today_date, " todays date is");
            console.log(current_time, "time is ");

                mob_app.findOne({ emp_ID: req.params.id,
                                    date: today_date
                }).then((user) => {
                    if (user) {
                     mob_app.findOneAndUpdate({
                         _id: user._id
                     }, { out_time: date.getHours() + ":" + date.getMinutes() }).then(() => {  
                         res.json({
                            message: 'Success',
                         });
                     }).catch((err) => {
                         console.error(err);
                        res.status(500).json({
                            message: 'Something went wrong!',
                        });
                     })
                    } else {
                        // Perform validation
                        
                        mob_app.create({
                            emp_ID: req.params.id,
                            date : today_date,
                            in_time: date.getHours() + ":" + date.getMinutes()
                        }).then((user) => {
                            res.json(user);
                        });
                    } 
                }).catch((err) => {
                    console.error(err);
                    res.status(500).json({
                        message: 'Something went wrong!',
                    });
                })
            } 
            
            
            else {
                res.status(400).json({
                    message: 'Invalid input!',
                });
            }
   });
     
   
router.post('/', (req, res) => {

    console.log(req.body);

    const { emp_ID, date, in_time } = req.body;

    try {
    
        let data = new mob_app({
            emp_ID, date, in_time
        });

        data.save();


    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

    res.send('Mob Route')
});


module.exports = router;