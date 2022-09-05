

//dot notation use kore  property k access korar opay:
//jokhon amra  direct property goluke pabo tokhon dot notation use korbo.
const student = {
    name: 'shakib',
    age: 15,
    class: 'ten',
    marks: {
        math: 20,
        Physics: 18,
        english:50
    }
}
const mathResult = student.marks.math;
console.log(mathResult);

//jokhon kono property er man akta variable  a thakbe tokhon kinto dot notation use
//korle kaj hobena.
//tokhon variable take braket notation use kore rakte hobe.
const subject = 'Physics';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);



//braket  notation  use kore property k access korar opay.
//braket  notation use korle property golu qutation er bitore rakte hobe.
const english = student['marks']['english'];
console.log(english);



