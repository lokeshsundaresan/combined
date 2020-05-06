import { Component } from "@angular/core";

@Component({

    selector:'dash-board',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']

})

export class DashBoard{
    fileToUpload: any;
    imageUrl: any;
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
  
      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
}