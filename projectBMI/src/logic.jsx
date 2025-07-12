export const calculateBMI = (height , weight) => {
    let bmi ;

    if(height <=0 || weight <= 0 || isNaN(height) || isNaN(weight)){
        return null;
    }

    bmi = weight / (height * height);

    return bmi;
};

export const getBMIMessage = (bmi) => {
  
  if (bmi === null || isNaN(bmi)) {
    return "Invalid BMI"; 
  }

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else if (bmi >= 30 && bmi < 34.9) {
    return "Obese (Class I)";
  } else if (bmi >= 35 && bmi < 39.9) {
    return "Obese (Class II)";
  } else {
    return "Obese (Class III)"; 
  }
};