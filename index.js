import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
 
inquirer
  .prompt([
      /* Pass your questions in here */
      {
          message: "Please enter your url",
          name : "url"
      }
  ])
  .then((answers) => {
      // Use user feedback for... whatever!!
      const a = answers.url;

      var qr_svg = qr.image(a);
      qr_svg.pipe(fs.createWriteStream("qr_img.png"));

     fs.writeFile("QR_LIST.txt", a , (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      }); 
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });