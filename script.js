const patient = [

{ name: 'Leandro',
  age: 39,
  weight: 65,
  heigth: 160
},
{ name: 'Amanda',
  age: 28,
  weight: 50,
  heigth: 159
},
{ name: 'Priscila',
  age: 38,
  weight: 55,
  heigth: 165
}

]

function printImc(patient){
  alert(`O paciente ${patient.name} possui IMC de ${(patient.weight / (patient.heigth / 100) ** 2).toFixed(2)}`)
}

for(let p of patient){
  printImc(p)
}