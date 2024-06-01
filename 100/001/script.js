// script.js

// دالة لحساب المجموع وتطبيق الشرط
function computeSumAndApplyCondition(a, b) {
    // if (typeof a !== 'number' || typeof b !== 'number') {
    //     throw new Error('Both arguments must be numbers.');
    // }

    if (a === b) {
        return 3 * (a + b);
    } else {
        return a + b;
    }
}

// دالة لتشغيل حالات الاختبار وعرض النتائج
function runTestCases() {
    const testCases = [
        { args: [1, 2], expected: 3 },
        { args: [3, 2], expected: 5 },
        { args: [2, 2], expected: 12 }
    ];

    const testResultElement = document.getElementById('test-result-output');
    const functionResultElement = document.getElementById('function-result-output');

    let testResult = "تم اجتياز جميع حالات الاختبار بنجاح.";
    let functionResult = "";

    testCases.forEach((testCase, index) => {
        const { args, expected } = testCase;

        try {
            const actual = computeSumAndApplyCondition(...args);

            // التحقق مما إذا كانت النتيجة الفعلية تتطابق مع النتيجة المتوقعة
            if (actual !== expected) {
                testResult = `فشلت حالة الاختبار ${index + 1}. المتوقع: ${expected}، الحصول على: ${actual}`;
            }

            functionResult += `حالة الاختبار ${index + 1}: computeSumAndApplyCondition(${args[0]}, ${args[1]}) => ${actual}\n`;
        } catch (error) {
            testResult = `خطأ في حالة الاختبار ${index + 1}: ${error.message}`;
        }
    });

    testResultElement.textContent = `نتيجة الاختبار: ${testResult}`;
    functionResultElement.textContent = `نتيجة الدالة:\n${functionResult}`;
}

// استدعاء دالة runTestCases لعرض النتائج
runTestCases();
