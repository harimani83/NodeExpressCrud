var express = require('express');
var router = express.Router();
var db = require('../model/dbconfig');

router.get('/employeeid', function (req, res, next) {
    db.get().collection('employee_tb').findOne({ empid: req.body.empid }).toArray((err, data) => {
        res.json(data);
    })
});
router.get('/employeelist', function (req, res, next) {
    db.get().collection('employee_tb').find({}).toArray((err, data) => {
        res.json(data);
    })
});
router.post('/employeeadd', function (req, res, next) {
    db.get().collection('employee_tb').insertOne(req.body, ((err, data) => {
        res.json(data);
    }))
});
router.put('/employeeid', function (req, res, next) {
    db.get().collection('employee_tb').updateOne({ empid: req.body.empid }, {
        $set: {
            empname: req.body.empname,
            mobile: req.body.mobile,
            email: req.body.email,
            adress: req.body.adress,
            department: req.body.department,
            experience: req.body.experience,
            skill: req.body.skill
        }
    }, ((err, data) => {
        res.json(data);
    }))
});

router.delete('/employeeid', function (req, res, next) {
    db.get().collection('employee_tb').deleteOne({ empid: req.body.empid },((err, data) => {
        res.json(data);
    }))
});
module.exports = router