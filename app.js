const calcBtn = document.getElementById('calculate')
const resetBtn = document.getElementById('reset')
const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')
const resultsArea = document.getElementById('result')
resetInput = () => {
    heightInput.value = '';
    weightInput.value = ''
}

calculateBMI = () => {
    const heightValue = heightInput.value;
    const weightValue = weightInput.value;
    const bmi = weightValue / (heightValue * weightValue)

    if (isNaN(bmi)) {
        alert('please enter a valid number');
        return;
    }

    const resultsElement = document.createElement('ion-card');
    resultsElement.innerHTML = `
    <ion-card-content>
    <h2>${bmi}</h2>
    </ion-card-content>
    `;
// clear current html so that the results cards dont stack
    // resultsArea.innerHTML = '';
    resultsArea.appendChild(resultsElement);

};

calcBtn.addEventListener('click', calculateBMI)
resetBtn.addEventListener('click', resetInput)