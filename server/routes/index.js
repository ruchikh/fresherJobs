const express = require('express');
const router = express.Router()
const jobController = require('../controller/jobController')


router.post("/api/newjob", jobController.addJobs);
router.get("/api/newjob", jobController.getAllJobs);




router.get('*', (err, res)=>{
  res.render('index');
})
module.exports =router;