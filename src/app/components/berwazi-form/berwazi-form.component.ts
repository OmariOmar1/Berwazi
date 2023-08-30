import { Component, OnInit } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser';
import {  FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-berwazi-form',
  templateUrl: './berwazi-form.component.html',
  styleUrls: ['./berwazi-form.component.css']
})
export class BerwaziFormComponent implements OnInit {
  public formData : OrderForm ={ // Initialize with default values
    name: '',
    mobileNumber: '',
    governorate: '',
    address: '',
    numberOfCanvases: 0,
    // Add other form fields here
  };

  public images: string | ArrayBuffer | null =  '';
  public imagesList: string[] = [];
  public fileInput: HTMLElement | null = null;
  public uploader:FileUploader = new FileUploader({url: 'URL'});
  public filePaths: {[key: string]: string} = {};

  constructor(public sanitizer:DomSanitizer) {}


  ngOnInit() {
    this.uploader.onAfterAddingFile = (fileItem) => {
      let url = (window.URL) ? window.URL.createObjectURL(fileItem._file) : (window as any).webkitURL.createObjectURL(fileItem._file);
      const fileName: string = fileItem.file?.name ?? '';
      this.filePaths[fileName] = url;
  }

  }

  onSubmit() {
    console.log('Form Data:', this.formData);

    // Append images to FormData
    for (const key in this.filePaths) {
      if (this.filePaths.hasOwnProperty(key)) {
        const imageFile = this.filePaths[key];
        console.log(imageFile);
      }
    }
  }
}

export interface OrderForm  {
  name: string,
  mobileNumber: string,
  governorate: string,
  address: string,
  numberOfCanvases: number,
  imageBlobUrl?: {[key: string]: string}
}
