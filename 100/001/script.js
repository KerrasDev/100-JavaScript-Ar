function computeSumAndApplyCondition(a, b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}

function runTestCases() {
  const testCases = [
    { args: [1, 2], expected: 3 },
    { args: [3, 2], expected: 5 },
    { args: [2, 2], expected: 12 },
  ];

  const testResultElement = document.getElementById("test-result-output");
  const functionResultElement = document.getElementById("function-result-output");
  let testResult = "تم اجتياز جميع حالات الاختبار بنجاح.";
  let functionResult = "";

  testCases.forEach((testCase, index) => {
    const { args, expected } = testCase;
    const actual = computeSumAndApplyCondition(...args);

    if (actual !== expected) {
      testResult = `فشل الاختبار: ${index + 1}, المتوقع: ${expected}, الناتج: ${actual}`;
    }

    functionResult += `الاختبار ${index + 1}: computeSumAndApplyCondition(${args[0]}, ${args[1]}) ==> ${actual}\n`;
  });

  if (testResultElement) {
    testResultElement.textContent = testResult;
  }

  if (functionResultElement) {
    functionResultElement.textContent = functionResult;
  }
}

function computeAndDisplay() {
  const nbre1 = parseInt(document.getElementById("nbre1").value);
  const nbre2 = parseInt(document.getElementById("nbre2").value);
  const result = computeSumAndApplyCondition(nbre1, nbre2);

  document.getElementById("function-result-output").textContent += `إدخال المستخدم: computeSumAndApplyCondition(${nbre1}, ${nbre2}) ==> ${result}\n`;
}

// استدعاء دالة runTestCases لتشغيل الاختبارات
runTestCases();

// ربط الحدث على الزر "أحسب" ليقوم بتشغيل الدالة computeAndDisplay
document.getElementById("calculateButton").addEventListener("click", computeAndDisplay);
