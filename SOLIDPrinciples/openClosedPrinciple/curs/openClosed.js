/*
! Open closed Principle
?The open-closed principle states that software entities (classes, modules, functions, and so on) should be open for extension, but closed for modification
*/

//! implementation

// //! WRONG
// function printQuizBad(questions) {
//   //! every time when questions variable is updated, this function need to be updated
//   questions.forEach((question) => {
//     console.log(question.description);

//     switch (question.type) {
//       case "boolean":
//         console.log("1. True");
//         console.log("2. False");
//         break;
//       case "multipleChoice":
//         question.options.forEach((option, index) => {
//           console.log(`${index + 1}. ${option}`);
//         });
//         break;
//       case "text":
//         console.log(`Answer: ________________`);
//         break;
//       case "range":
//         console.log(`Minimum: _________________`);
//         console.log(`Maximum: _________________`);
//         break;
//       default:
//         break;
//     }
//     console.log("");
//   });
// }

// //But not really bad, is bad in this case
// const questionsBad = [
//   { type: "boolean", description: "This video is useful." },
//   {
//     type: "multipleChoice",
//     description: "What is your favorite language?",
//     options: ["CSS", "HTML", "JS", "Python"],
//   },
//   { type: "text", description: "Describe your favorite JS feature" },
//   { type: "range", description: "What is the speed limit in your city" },
// ];
// printQuizBad(questionsBad);

//? GOOD way
class BooleanQuestions {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}
class TextQuestion {
  constructor(description, options) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Answer: ______________");
  }
}
class RangeQuestion {
  constructor(description, options) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Minimum: ______________");
    console.log("Maximum: ______________");
  }
}
function printQuizGood(questions) {
  questions.forEach((question) => {
    question.printQuestionChoices();
    console.log("");
  });
}

const questionsGood = [
  new BooleanQuestions("This video is useful."),
  new MultipleChoiceQuestion("What is your favorite language?", ["CSS", "HTML", "JS", "Python"]),
  new TextQuestion("Describe your favorite JS feature"),
  new RangeQuestion("What is the speed limit in your city"),
];

printQuizGood(questionsGood);
