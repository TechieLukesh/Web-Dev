// normal function
// function saveToDB(data) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed >= 4) console.log("Data was saved!");
//   else console.log("Weak connection! Data was not saved!");
// }

// func with setTimeout/callbacks
// function saveToDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed >= 4) success();
//   else failure();
// }

//nested callbacks --> callback hell
// saveToDB(
//   "Lukesh",
//   () => {
//     // success()
//     console.log("Data was saved!");
//     // if the first was saved then
//     saveToDB(
//       "Rohit",
//       () => {
//         console.log("Data2 was saved!");
//         // if the second was saved then
//         saveToDB(
//           "Poddar",
//           () => {
//             console.log("Data3 was saved!");
//           },
//           () => {
//             console.log("Data3 was not saved!");
//           }
//         );
//       },
//       () => {
//         console.log("Data2 was not saved!");
//       }
//     );
//   },
//   () => {
//     // failure()
//     console.log("Weak Connection! Data was not saved!");
//   }
// );

// handling the callback hell using promises

function saveToDB(data) {
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("success: Data was saved!");
    } else {
      failure("failure: Data was not saved!");
    }
  });
}

// basic way to handle callback hell using promise
let req = saveToDB("Lukesh");
req
  .then(() => {
    console.log("Data was saved");
    saveToDB("Rohit").then(() => {
      console.log("Data2 was saved!");
      saveToDB("Poddar").then(() => {
        console.log("Data3 was saved!");
      });
    });
  })
  .catch(() => {
    console.log("Data was not saved!");
  });

// the above code can be written w/o using req var
// saveToDB("Lukesh");

//   .then(() => {
//     console.log("Data was saved");
//     saveToDB("Rohit").then(() => {
//       console.log("Data2 was saved!");
//       saveToDB("Poddar").then(() => {
//         console.log("Data3 was saved!");
//       });
//     });
//   })
//   .catch(() => {
//     console.log("Data was not saved!");
//   });
// improved version of then and catch methods

// saveToDB("Lukesh")
//   .then(() => {
//     console.log("Data saved!");
//     return saveToDB("Rohit");
//   })
//   .then(() => {
//     console.log("Data2 was saved!");
//     return saveToDB("Poddar");
//   })
//   .then(() => {
//     console.log("Data3 was saved!");
//   })
//   .catch(() => {
//     console.log("Data was not saved!");
//   });
