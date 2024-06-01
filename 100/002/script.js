// script.js

document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputString = document.getElementById('input-string').value;
    analyzeString(inputString);
});

function analyzeString(inputString) {
    const frequencyMap = {};
    for (let char of inputString) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    const sortedChars = Object.keys(frequencyMap).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let resultOutput = '';
    for (let char of sortedChars) {
        resultOutput += `الحرف '${char}' يظهر ${frequencyMap[char]} مرة\n`;
    }

    document.getElementById('result-output').textContent = resultOutput;
}
