var express = require("express");
var router = express.Router();
const Student = require("../models/Student"); 
const Cohort = require("../models/Cohort");


router.post("/", (req, res, next) => {
  const {
    inProgress,
    cohortSlug,
    cohortName,
    program,
    campus,
    startDate,
    endDate,
    programManager,
    leadTeacher,
    totalHours,
  } = req.body;

  Cohort.create({
    inProgress,
    cohortSlug,
    program,
    campus,
    startDate,
    endDate,
    programManager,
    leadTeacher,
    totalHours,
  })
    .then((createdCohort) => {
      res.status(201).json(createdCohort);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//Retrieves all the students
router.get("/", (req, res, next) => {
  Cohort.find()
    .then((foundCohort) => {
      res.json(foundCohort);
    })
    .catch((err) => {
      res.status(502).json(err);
    });
});

//Retrieves all the students for a given cohort

//Updates a specific student by id
router.post("/update/:cohortId", (req, res, next) => {
  const {} = req.body;

  Cohort.findByIdAndUpdate(
    req.params.cohortId,
    {},
    {
      new: true,
    }
  )
    .then((updatedCohort) => {
      console.log("This is the updated cohort ===>", updatedCohort);
      res.json(updatedCohort);
    })
    .catch((err) => {
      console.log("Error updating cohort ====>", err);
      res.status(502).json(err);
    });
});

//Deletes a specific student by id
router.get("/delete/:cohortId", (req, res, next) => {
  Cohort.findByIdAndDelete(req.params.studentId)
    .then((deletedCohort) => {
      console.log("This is the updated cohort ===>", deletedCohort);
      res.json(err);
    })
    .catch((err) => {
      console.log("Error updating Cohort ====>", err);
      res.status(502).json(err);
    });
});

module.exports = router