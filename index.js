// for loop and while loop

function writeCards(array1, event) {
  const array2 = [];
  for (let i = 0; i < array1.length; i++) {
    array2.push(`Thank you, ${array1[i]}, for the wonderful ${event} gift!`);
  }
  return array2;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "Suprise"));

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countDown(10);