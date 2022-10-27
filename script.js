let str = 'Я изучаю Javascript';
console.log(str[0]);
console.log(str[2]);
console.log(str[str.length - 1]);

let newstr = str.replace(/ю/gi, 'л');
console.log(newstr);
let newstr2 = str.replace(/Javascript/gi, 'Frontend');
console.log(newstr2);

let arr = ['cat', 'dog', 'parrot', 'horse'];
for (let key in arr) {
    if (arr[key] == 'parrot') console.log(key);
}


let arr2 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
let filteredArr = arr2.filter(value => value != 'fish');
console.log(filteredArr);

let arr3 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
arr3.shift();
console.log(arr3);

arr2.splice(4,6);
console.log(arr2);


let array = [31, 10, 'chicken', 9, 'fish', 10];
let filteredArr3 = array.filter(value => value == 10);
console.log(filteredArr3);
let filteredArr2 = array.filter(value => value == 'chicken' || value == 'fish')
console.log(filteredArr2);

const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

  for(const property in person) {
    console.log(`${typeof property}: ${typeof person[property]}`);
}

  for(const property in person) {
    console.log(`${property}: ${person[property]}`);
}

