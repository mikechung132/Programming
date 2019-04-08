// Tutorial 4 - File System Module Part 2

const fs = require('fs');

/* Folder Creation */
// fs.mkdir('Example Folder', (err) => {
//   if(err)
//     console.log(err);
//   else
//     console.log('Folder Successfully Created.');
// });

/* Folder Removal */
// fs.mkdir('Example Folder', (err) => {
//   if(err)
//     console.log(err);
//   else{
//     fs.rmdir('Example Folder', (err) => {
//       if(err)
//         console.log(err);
//       else
//         console.log('Example Folder', (err) => {
//           console.log('Successfully deleted folder');
//         });
//     });
//   }
// });

/* Write File to Folder */
// fs.mkdir('FolderCreated', (err) => {
//   if(err)
//     console.log(err);
//   else
//     fs.writeFile('./FolderCreated/exampleFile.txt', 'Sample Text', (err) => {
//       if(err)
//         console.log(err);
//       else
//         console.log('Successfully created file.');
//     });
// });

/* Deletes File Then Folder */
// fs.unlink('./FolderCreated/exampleFile.txt', (err) => {
//   if(err)
//     console.log(err);
//   else
//   fs.rmdir('FolderCreated', (err) => {
//     if(err)
//       console.log(err);
//     else
//       console.log('Deleted Folder.');
//   });
// });

/* Deletes All Folders & Files */
// fs.readdir('example', (err, files) => {
//   if(err)
//     console.log(err);
//   else
//     for(let file of files){
//       fs.unlink('./example/' + file, (err) => {
//         if(err)
//           console.log(err);
//         else
//           console.log('Sucessfully deleted file');
//       });
//     }
// });
