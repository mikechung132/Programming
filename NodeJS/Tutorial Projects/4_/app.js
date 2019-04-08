// Tutorial 4 - File System Module Part 1

const fs = require('fs');

/*create a file*/
// fs.writeFile('example.txt', "this is an example", (err) => {
//   if(err)
//     console.log(err);
//   else
//     console.log('File successfully created.');
//     fs.readFile('example.txt', 'utf8', (err, file) => {
//       if(err)
//         console.log(err);
//       else
//         console.log(file);
//     });
// });

/*rename a file*/
// fs.rename('example.txt', 'changedFileName.txt', (err) => {
//   if(err)
//     console.log(err);
//   else
//     console.log('Successfully renamed the file');
// } );

/*Appending File*/
// fs.appendFile('changedFileName.txt', 'Some data being appended', (err) => {
//   if(err)
//     console.log(err);
//   else
//     console.log('Successfully appended data to file.');
// });

/*Delete File*/
fs.unlink('changedFileName.txt', (err) => {
  if(err)
    console.log(err);
  else
    console.log('Successfully deleted the file.');
})
