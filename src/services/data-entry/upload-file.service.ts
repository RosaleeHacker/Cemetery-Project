import * as firebase from 'firebase';
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {FileUpload} from "../../models/fileUpload/FileUpload";

@Injectable()
export class UploadFileService {
  constructor(private db: AngularFireDatabase) {
  }

  private basePath = '/vegetation';

  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

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
        this.saveFileData(fileUpload);
      });
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }
}
