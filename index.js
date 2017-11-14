// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {
      return driver.toLowerCase()
  });
}

function nameToAttributes(names) {
  return names.map(function(name) {
    let fName = name.split(" ")[0];
    let lName = name.split(" ")[1];
    return {firstName: fName, lastName: lName};
  });
}

function attributesToPhrase(array) {
  return array.map(function(object) {
    return `${object[name]} is from ${object[hometown]}`
  })
}



// [1, 2, 3].map(function (num) { return num * num; });
// // => [1, 4, 9]

// function matchName(drivers, string) {
//   let matchedNames = drivers.filter(function(driver){
//       // return drivers["name"] === drivername;
//       return driver["name"].toUpperCase() === string.toUpperCase();
//     });
// return matchedNames;
// }
