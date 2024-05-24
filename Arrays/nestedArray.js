// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder women", "flash"],
// ];

// for (i = 0; i < heroes.length; i++) {
//   for (j = 0; j < heroes[i].length; j++) {
//     console.log(heroes[j]);
//   }
// }

let students = [
  ["aman", 94],
  ["shraddha", 56],
  ["rajat", 56],
];

for(i=0;i<students.length;i++){
    console.log(`loop ${i}`);
    for(j=1;j<students[i].length;j++){
       console.log(`Name : ${students[i][j-1]} Marks :${students[i][j]}`);
    }
}