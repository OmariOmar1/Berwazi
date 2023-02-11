import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-berwwazi-form',
  templateUrl: './berwwazi-form.component.html',
  styleUrls: ['./berwwazi-form.component.css']
})
export class BerwwaziFormComponent implements OnInit {
  constructor() { }

  public images: string | ArrayBuffer | null =  '';
  public imagesList: string[] = [];
  ngOnInit() {}



public onShowImage(fileInput: HTMLInputElement){
  this.imagesList = [];
  const images = fileInput.files;
  if (images) {
    for (let i = 0; i < images.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.imagesList.push(e.target.result as string);
        }
      };
      reader.readAsDataURL(images[i]);
    }
  }
}

}
