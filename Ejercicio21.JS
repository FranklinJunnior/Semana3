const autos = ['BMW', 'Mercedez Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i +" : " +  autos [i]);
}

autos[i] = "MercedesBenz";
console.log(autos[i]);

autos.push("Audi");
console.log(autos);
