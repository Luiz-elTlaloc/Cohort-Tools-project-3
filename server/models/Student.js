const { model, Schema } = require("mongoose");



// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const studentSchema = new Schema(
    {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: [String],
    program: String,
    background: String,
    image: String,
    cohort: {type: Schema.Types.ObjectId, ref: "Cohort"},
    projects: []
    },
    {
        timestamps: true,
    }
    );

// CREATE MODEL
// The model() method defines a model (Book) and creates a collection (books) in MongoDB
// The collection name will default to the lowercased, plural form of the model name:
//                          "Book" --> "books"



// EXPORT THE MODEL
// module.exports = Student;

module.exports = model("Student", studentSchema);