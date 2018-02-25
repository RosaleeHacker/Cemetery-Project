import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {} from 'angularfire2/storage'
import {Vegetation} from "../../models/vegetation/vegetation.interface";

@Injectable()
export class DatabaseAccessService
{
  private vegetationDataRef = this.database.list<Vegetation>("vegetation-list");

  constructor(private database: AngularFireDatabase)
  {

  }

  getVegetationData()
  {
    console.log(this.vegetationDataRef);
    return this.vegetationDataRef;
  }

  addVegetationData(vegetation: Vegetation)
  {
    console.log(vegetation);
    return this.vegetationDataRef.push(vegetation);
  }
}
