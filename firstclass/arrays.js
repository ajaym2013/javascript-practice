const myArray = [1,2,3,4,5];

const myNewArray = new Array(1,2,3,4,5);
console.log(myArray[1]);

const dcHeros = ["batman", "superman", "flash","Gl","deadpool"];
// dcHeros[dcHeros.length] = 'wonder women'
dcHeros.push("wonder women");
// const lastHero = dcHeros.pop();//import for store and show alert delete array
// dcHeros.unshift("Aquaman");
// console.log(dcHeros);

// console.log(dcHeros.toString());
// console.log(dcHeros.join(","));
console.log(dcHeros.slice(1, 3));
console.log(dcHeros);
console.log(dcHeros.splice(1, 3));
console.log(dcHeros);