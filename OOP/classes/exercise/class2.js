/*

Exercise: 

	1.	Create a class called "student"
	2.	Allow us to pass in 3 properties/fields on the
			Student constructor  which get set to the instance:
				-	name (string)
				-	major (string)
				-	grades (Array of NUmbers)

	3.	Create a method on "Student" called "addGrade" that
			has one parameter "grade". It will simply push the "grade"
			given on the "grades" Array.

	4.	Create a method on "student" called "gpa" that will return the
			Average grade of the student's "grades"
	5.	Create an instance of the Student class like so:
			const eva = new Student("Eva", "Arts", [95,75,83])
	
	6.	Print out the "eva" instance
	7. 	Use the "gpa" method on "eva" to print out their average
			grade (Should be 84.33)
*/

//! implementation

// create a class called student

class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    let averageGrade = this.grades.reduce((total, curr) => total + curr, 0);

    return console.log(`${this.name} has average: ${averageGrade / this.grades.length}`);
  }
}

const eva = new Student("Eva", "Arts", [95, 75, 83]);
console.log(eva);
console.log(eva.gpa());
