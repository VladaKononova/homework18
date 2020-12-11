// 1 task
let weight = +prompt('Enter your weight');
let height = +prompt('Enter your height');


let index = weight / (height ** 2);

index = Math.round(index * 10) / 10;

alert(`Your body index: ${index}`);

if(index <= 16) {
    alert(`Severely underweight`);
}else if((index > 16) && (index <= 18.5)) {
    alert(`Underweight`);
}else if((index > 18.5) && (index <= 25)) {
    alert(`Normal (healthy weight)`);
}else if((index > 25) && (index <= 30)) {
    alert(`Overweight`);
}else if((index > 30) && (index <=35)) {
    alert(`Obese Class I (Moderately obese)`);
}else if((index > 35) && (index <= 40)) {
    alert(`Obese Class II (Severely obese)`);
}else if(index >= 40){
    alert(`Obese Class III (Very severely obese)`);
}

// 2 task
let year = +prompt('Enter year');

if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
    alert(`Non-leap year`)
}
else{
    alert(`Leap year`);
}




