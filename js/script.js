// function for calculate button
function calculateBMI() {
	var gender = document.getElementById('gender').value;
	var age = parseInt(document.getElementById('age').value); // convert string to integer
	var weight = parseFloat(document.getElementById('weight').value); // convert string to float
	var height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

	if (isNaN(age) || isNaN(weight) || isNaN(height)) {
		// check if any of these value is null
		document.getElementById('result').innerHTML =
			'Please enter valid values for age, weight, and height.';
		return;
	}

	var bmi = weight / (height * height); // calculating BMI

	var interpretation = ''; // explanation and suggestion about BMI
	var color = 'black'; // text color for BMI result (default = black)
	if (bmi < 18.5) {
		color = 'orange';
		interpretation =
			'Underweight: You may need to gain weight to reach a healthier BMI range. Consult with a healthcare professional for personalized advice.';
	} else if (bmi < 25) {
		color = 'green';
		interpretation =
			'Normal weight: Congratulations! Your BMI is within the healthy range. Maintain a balanced diet and regular exercise to stay healthy.';
	} else if (bmi < 30) {
		color = 'orange';
		interpretation =
			'Overweight: You may be at risk for certain health problems due to excess weight. Consider making lifestyle changes such as healthier eating and increased physical activity.';
	} else {
		color = 'red';
		interpretation =
			"Obese: Your BMI indicates a high risk of obesity-related health issues. It's important to take steps to lose weight through diet, exercise, and possibly medical intervention. Consult with a healthcare provider for guidance.";
	}

	document.getElementById('result').innerHTML = bmi.toFixed(2); // update BMI result with 2 digit after comma
	document.getElementById('result').style.color = color; // change text color of BMI result
	document.getElementById('interpretation').innerHTML = interpretation; // update interpretation
}

// function for reset button
function resetForm() {
	document.getElementById('gender').value = 'male';
	document.getElementById('age').value = '';
	document.getElementById('weight').value = '';
	document.getElementById('height').value = '';
	document.getElementById('result').innerHTML = 'BMI Index';
	document.getElementById('interpretation').innerHTML = '';
	document.getElementById('result').style.color = 'black';
}
