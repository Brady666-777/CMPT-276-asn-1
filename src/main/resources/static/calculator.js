function addRow() {
    const table = document.getElementById('activities-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    const rowCount = table.rows.length;
    cell1.innerHTML = `Activity ${rowCount}`;
    cell2.innerHTML = `A${rowCount}`;
    cell3.innerHTML = `<input type="text" name="weight">`;
    cell4.innerHTML = `<input type="text" name="grade"> / <input type="text" name="total" oninput="updatePercent(this)">`;
    cell5.innerHTML = `<span name="percent"></span>`;
}

function updatePercent(element) {
    const gradeInput = element.parentElement.getElementsByTagName('input')[0].value;
    const totalInput = element.value;

    const percentSpan = element.parentElement.parentElement.getElementsByTagName('span')[0];
    if (totalInput && gradeInput) {
        const percent = (gradeInput / totalInput) * 100;
        percentSpan.textContent = percent.toFixed(2) + '%';
    } else {
        percentSpan.textContent = '';
    }
}

function calculateMean() {
    const grades = document.getElementsByName('grade');
    const totals = document.getElementsByName('total');

    let sum = 0;
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const total = parseFloat(totals[i].value);

        if (!isNaN(grade) && !isNaN(total)) {
            sum += grade / total;
            count++;
        }
    }

    if (count > 0) {
        const mean = (sum / count) * 100;
        document.getElementById('result-display').textContent = `Mean: ${mean.toFixed(2)}%`;
    } else {
        document.getElementById('result-display').textContent = 'Mean: N/A';
    }
}

function calculateWeighted() {
    const weights = document.getElementsByName('weight');
    const grades = document.getElementsByName('grade');
    const totals = document.getElementsByName('total');

    let weightedSum = 0;
    let weightSum = 0;

    for (let i = 0; i < grades.length; i++) {
        const weight = parseFloat(weights[i].value);
        const grade = parseFloat(grades[i].value);
        const total = parseFloat(totals[i].value);

        if (!isNaN(weight) && !isNaN(grade) && !isNaN(total)) {
            weightedSum += (grade / total) * weight;
            weightSum += weight;
        }
    }

    if (weightSum > 0) {
        const weightedMean = (weightedSum / weightSum) * 100;
        document.getElementById('result-display').textContent = `Weighted Mean: ${weightedMean.toFixed(2)}%`;
    } else {
        document.getElementById('result-display').textContent = 'Weighted Mean: N/A';
    }
}
