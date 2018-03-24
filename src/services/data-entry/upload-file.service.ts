import * as firebase from 'firebase';
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {FileUpload} from "../../models/fileUpload/FileUpload";

@Injectable()
export class UploadFileService {
  constructor(private db: AngularFireDatabase) {
  }

  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }, basePath: String) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        console.log(error)
      },
      () => {
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload, basePath);
      });
  }

  private saveFileData(fileUpload: FileUpload, basePath: String) {
    this.db.list(`${basePath}/`).push(fileUpload);
  }
}
