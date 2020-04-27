const scores = [83, 82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
   
   switch (scores.length > 0) {
       case scores[i] >= 50 && scores[i] <= 60:
           grades.F ++;
           break;
        case scores[i] >= 61 && scores[i] <= 70:
            grades.D ++;
            break;
            case scores[i] >= 71 && scores[i] <= 80:
            grades.C ++;
            break;
            case scores[i] >= 81 && scores[i] <= 90:
            grades.B ++;
            break;
            case scores[i] >= 91 && scores[i] <= 100:
            grades.A ++;
            break;
       default:
           break;
   }
}

// How many of each grade? Accomplish this with a for..in loop.
currentGradeCount = 0;
for (const grade in grades) {
    console.log(currentGradeCount);
    
    console.log(
        `${grade} : ${grades[grade]}`
    );
    if (grades[grade] < grades[currentGradeCount]) {
        console.log("test");
        
    }
}

// What is the lowest score? Sort the array and find out.
scores.sort() 
lowestGrade = scores[0]
console.log(lowestGrade);

// What is the highest score?
highestGrade = scores[scores.length-1]
console.log(highestGrade);