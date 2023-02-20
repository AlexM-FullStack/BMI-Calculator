
const bmiResultEl = document.getElementById('bmi-result')
const weightConditionEl = document.getElementById('weight-condition')
const btnEl = document.getElementById('btn')

btnEl.addEventListener('click', () => {
    const heightEl = document.getElementById('height').value / 100
    const weightEl = document.getElementById('weight').value
    let bmi = (weightEl / (heightEl * heightEl)).toFixed(2)
    

    if (bmi <= 18.5) {
        weightConditionEl.innerText = 'Your BMI is underweight'
        bmiResultEl.value = bmi
    } else if (bmi > 18.5 && bmi <= 24.9) {
        weightConditionEl.innerText = 'Your BMI is in the Healthy Weight range'
        bmiResultEl.value = bmi
    } else if (bmi > 24.9 && bmi <= 29.9) {
        weightConditionEl.innerText = 'Your BMI is within the overweight range'
        bmiResultEl.value = bmi
    } else {
        weightConditionEl.innerText = 'Your BMI falls in the obese range'
        bmiResultEl.value = bmi
    }
})



