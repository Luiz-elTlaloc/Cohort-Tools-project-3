
const { model, Schema } = require("mongoose");

// const Cohort = mongoose model("Cohort", cohortSchema);


// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const cohortSchema = new Schema(
    {
    inProgress: {type: String, required: true, enum: ["true", "false"]},
    cohortSlug: String,
    cohortName: String,
    program: String,
    campus:String,
    startDate: Date,
    endDate: Date,
    programManager: String,
    leadTeacher: String,
    totalHours: Number
    },
    {
        timestamps:true,
    }
)




// CREATE MODEL
// The model() method defines a model (Book) and creates a collection (books) in MongoDB
// The collection name will default to the lowercased, plural form of the model name:
//                          "Book" --> "books"



// EXPORT THE MODEL
// module.exports = Cohort;

module.exports = model("Cohort", cohortSchema);











