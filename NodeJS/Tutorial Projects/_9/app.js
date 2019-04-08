// Tutorial 9 - Create package.json using npm init; Installing packages using nom; Semantic Versioning

// "dependencies": {
//   "lodash": "^4.17.11" -> major.minor.patch
//                          ^ 4.x.x - carrot symbol: Dont make any major updates, but if minor or patch, it will download
//                          ~ 4.17.x - tilda symbol: You only want patch updates
//                            4.17.11 - No pre symbol: Only package you will have is 4.17.11 - No updates/downloads

const _ = require('lodash');
let example = _.fill([1,2,3,4,5], "Kiwi", 1, 4);
console.log(example);
