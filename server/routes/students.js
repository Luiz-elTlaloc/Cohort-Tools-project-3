var express = require("express");
const mongoose = require("mongoose")
var router = express.Router();
const Student = require("../models/Student");
/* const Cohort = require("../models/Cohort") */

//Creates a new student
router.post("/", (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    linkedinUrl,
    languages,
    program,
    background,
    image,
    cohort,
    projects,
  } = req.body;

  Student.create({
    firstName,
    lastName,
    email,
    phone,
    linkedinUrl,
    languages,
    program,
    background,
    image,
    cohort,
    projects,
  })
    .then((createdStudent) => {
      res.status(201).json(createdStudent);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//Retrieves all the cohort
router.get("/", (req, res, next) => {
  Student.find()
    .then((foundStudent) => {
      res.json(foundStudent);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Retrieves all the students for a given cohort
router.get("/cohort/:cohortId", (req, res, next) => {
    console.log(req.params.cohortId)
    Student.find({cohort: req.params.cohortId}).populate("cohort")
      
      .then((foundStudents) => {
        console.log("These are the found students===>", foundStudents);
        res.json(foundStudents);
      })
      .catch((err) => {
        res.status(504).json(err);
      });
  });


  // router.get("/cohort/:cohortId", async (req, res) => {
  //   try {
  //       const students = await Student.find({cohort: req.params.cohortId }).populate("cohort")
     
  //       return res.status(200).json(students)
  //   } catch (error) {
  //       console.log(error)
  //       return res.status(500).json(error)
  //   }
  // })

//Retrieves a specific student by id
router.get("/:studentId", (req, res, next) => {
  Student.findById(req.params.studentId)
    .then((foundStudentById) => {
      res.json(foundStudentById);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Updates a specific student by id
router.post("/update/:studentId", (req, res, next) => {
  Student.findByIdAndUpdate(
    req.params.studentId,
    req.body,
    {},
    {
      new: true,
    }
  )
    .then((updatedStudent) => {
      console.log("This is the updated student ===>", updatedStudent);
      res.json(updatedStudent);
    })
    .catch((err) => {
      console.log("Error updating student ====>", err);
      res.status(500).json(err);
    });
});

//Deletes a specific student by id
router.get("/delete/:studentId", (req, res, next) => {
  Student.findByIdAndDelete(req.params.studentId)
    .then((deletedStudent) => {
      console.log("This is the updated book ===>", deletedStudent);
      res.json(deletedStudent);
    })
    .catch((err) => {
      console.log("Error updating book ====>", err);
      res.status(500).json(err);
    });
});

module.exports = router;