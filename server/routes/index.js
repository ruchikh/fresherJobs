const express = require('express');
const router = express.Router()
const jobController = require('../controller/jobController');
const userController = require('../controller/userController');


router.post("/api/newjob", jobController.addJobs);
router.get("/api/newjob", jobController.getAllJobs);


// User Routes

router.post("/api/signup", userController.createUser);
router.post("/api/login", userController.logIn);
router.get("/api/isLoggedIn", userController.isLoggedIn);




router.get('*', (err, res)=>{
  res.render('index');
})
module.exports =router;