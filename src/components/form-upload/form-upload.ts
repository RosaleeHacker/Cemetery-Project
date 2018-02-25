import {Component, OnInit} from '@angular/core';
import {FileUpload} from "../../models/fileUpload/FileUpload";
import {UploadFileService} from "../../services/data-entry/upload-file.service";

/**
 * Generated class for the FormUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-upload',
  templateUrl: 'form-upload.html',
  providers: [UploadFileService]
})
export class FormUploadComponent implements OnInit{

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: {percentage: number} = {percentage: 0};

  constructor(private uploadService: UploadFileService) {
  }

  ngOnInit(){}

  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  upload(){
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

}
