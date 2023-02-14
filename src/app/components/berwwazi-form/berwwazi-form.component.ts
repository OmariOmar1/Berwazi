import { Component, OnInit } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {  FileUploader } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';

@Component({
  selector: 'app-berwwazi-form',
  templateUrl: './berwwazi-form.component.html',
  styleUrls: ['./berwwazi-form.component.css']
})
export class BerwwaziFormComponent implements OnInit {
  constructor(public sanitizer:DomSanitizer) { }

  public images: string | ArrayBuffer | null =  '';
  public imagesList: string[] = [];
  public fileInput: HTMLElement | null = null;
  public uploader:FileUploader = new FileUploader({url: 'URL'});
  public filePaths: {[key: string]: string} = {};
  ngOnInit() {
    this.uploader.onAfterAddingFile = (fileItem) => {
      let url = (window.URL) ? window.URL.createObjectURL(fileItem._file) : (window as any).webkitURL.createObjectURL(fileItem._file);
      const fileName: string = fileItem.file?.name ?? '';
      this.filePaths[fileName] = url;
  }

  }

}
