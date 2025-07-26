function calculatePercentage(marksObtained, totalMarks, callback) {
  const percentage = (marksObtained / totalMarks) * 100;
  

  callback(percentage);
}

function assignGrade(percentage) {
  let grade;

  if (percentage >= 90) {
    grade = 'A';
  } else if (percentage >= 75) {
    grade = 'B';
  } else if (percentage >= 60) {
    grade = 'C';
  } else if (percentage >= 40) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
  console.log(`Grade: ${grade}`);
  
}
const marksObtained = 460;
const totalMarks = 600;

calculatePercentage(marksObtained, totalMarks, assignGrade);
