
// const sum = marks.reduce((sum, current) => sum + current, enitialValue);
//.reduce() map er motoi but ati sob golu element k nia akti bania ba sum kore return kore.
//reduce() parent thesis er bitore array function doiti parameter use kore
//parameter to j kono nam e hote pare but prothom parameter sum and second parameter current k dore nei
//and  => array sign er maddhome return korbe doiti parameter er jogfol take
//and  dan pashe akti initial value 0 dia dite hobe.
//Accomulator use two parameters.
const marks = [1, 2, 3, 4, 5, 6];
const total = marks.reduce((sum, current) => sum + current, 0);
// console.log(total);



//.reduce() for multiline.
const totalMarks = marks.reduce((sum, current) => {
//    console.log(sum, current);
    return sum + current
    
}, 0);
 
// console.log(totalMarks);




