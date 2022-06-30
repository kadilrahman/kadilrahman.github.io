const calories = document.querySelector(".bmr-calculator .result .calories");

const calculateBtn = document.querySelector(
  ".bmr-calculator .result .calculate-btn"
);

const age = document.querySelector(" .bmr-calculator form #age");
const height = document.querySelector(".bmr-calculator form #height");
const weight = document.querySelector(".bmr-calculator form #weight");
const errorMessage = document.querySelector(
  ".bmr-calculator .result .error-message"
);
// BMR = 10*weight + 6.25*height - 5*age + 5;
// BMR = 10*weight + 6.25*height - 5*age - 161;

let calculateBMR = (weight, height, age, gender, activity) => {
  let maleBmr = 10 * weight + 6.25 * height - 5 * age + 5;
  let femaleBmr = 10 * weight + 6.25 * height - 5 * age - 161;
  if (gender == "male") {
    if (activity == "no") {
      return maleBmr * 1.2;
    } else if (activity == "light") {
      return maleBmr * 1.375;
    } else if (activity == "moderate") {
      return maleBmr * 1.55;
    } else if (activity == "hard") {
      return maleBmr * 1.725;
    } else if (activity == "vhard") {
      return maleBmr * 1.9;
    }
  } else {
    if (activity == "no") {
      return femaleBmr * 1.2;
    } else if (activity == "light") {
      return femaleBmr * 1.375;
    } else if (activity == "moderate") {
      return femaleBmr * 1.55;
    } else if (activity == "hard") {
      return femaleBmr * 1.725;
    } else if (activity == "vhard") {
      return femaleBmr * 1.9;
    }
  }
};

calculateBtn.addEventListener("click", () => {
  if (
    age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid")
  ) {
    errorMessage.classList.add("active");

    return;
  }

  errorMessage.classList.remove("active");

  let genderValue = document.querySelector(
    ".bmr-calculator form input[name='gender']:checked"
  ).value;

  let activityValue = document.getElementById("activity").value;

  let BMR = calculateBMR(
    weight.value,
    height.value,
    age.value,
    genderValue,
    activityValue
  );

  calories.innerHTML = BMR.toLocaleString("en-US");
});

//INPUT VALIDATION

age.addEventListener("input", (e) => {
  let ageValue = e.target.value;

  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  let heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue < 0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue < 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});

//calories burned

// function Burned() {
//   var w1 = document.getElementById("weight1").value;
//   var a = document.getElementById("act").value;
//   var t = document.getElementById("time").value;

//   var burnedpermin = (a * w1) / 60;
//   var burned = burnedpermin * t;

//   document.getElementById("result1").innerHTML =
//     "Conducting the activity you have selected for the said duration will burn around " +
//     burned +
//     " calories.";
// }

const calories1 = document.querySelector(".bmr-calculator2 .result .calories");
const calculateBtn1 = document.querySelector(
  ".bmr-calculator2 .result .calculate-btn2"
);
const weight1 = document.querySelector(".bmr-calculator2 form #weight1");
const time = document.querySelector(".bmr-calculator2 form #time");

const errorMessage1 = document.querySelector(
  ".bmr-calculator2 .result .error-message2"
);
calculateBMR1 = (weight1, time, a) => {
  var burnedpermin = (a * weight1) / 60;
  var burned = burnedpermin * time;
  return Math.round(burned);
};

calculateBtn1.addEventListener("click", () => {
  if (
    weight1.classList.contains("invalid") ||
    time.classList.contains("invalid")
  ) {
    errorMessage1.classList.add("active");
    return;
  }

  let act = document.getElementById("act").value;

  let BMR1 = calculateBMR1(weight1.value, time.value, act);

  calories1.innerHTML = BMR1;
});

//Validation

weight1.addEventListener("input", (e) => {
  let weight1Value = e.target.value;

  if (!weight1Value || isNaN(weight1Value) || weight1Value < 0) {
    weight1.classList.add("invalid");
  } else {
    weight1.classList.remove("invalid");
  }
});

time.addEventListener("input", (e) => {
  let timeValue = e.target.value;

  if (!timeValue || isNaN(timeValue) || timeValue < 0) {
    time.classList.add("invalid");
  } else {
    time.classList.remove("invalid");
  }
});
