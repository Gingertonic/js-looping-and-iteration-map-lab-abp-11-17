// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {
      return driver.toLowerCase()
  });

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
