import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: 'cv.page.html',
  styleUrls: ['cv.page.scss']
})
export class CvPage {

  constructor() {}

  // copyToClipboard() {
  //   // Get the text field
  //   var copyText = document.getElementById("email");
    
  //   // Select the text field
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999); // For mobile devices
    
  //   // Copy the text inside the text field
  //   navigator.clipboard.writeText(copyText.value);
    
  //   // Alert the copied text
  //   alert("Correo copiado al portapapeles: " + copyText.value);
  // }
  
  // showingSocialbar() {
  //     console.log('You are into showingSocialbar()');
  //     var x: any | null = document.getElementById("socialbar");
  // if (x.style.display === "none") {
  //     x.style.display = "block";
  // } else {
  //     x.style.display = "none";
  // }
  // }

}
