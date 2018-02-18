import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Vegetation} from "../../models/vegetation/vegetation.interface";

@Injectable()
export class DataEntryService
{
  private vegetationDataRef = this.database.list<Vegetation>("vegetation-list");

  constructor(private database: AngularFireDatabase)
  {

  }

  getVegetationData()
  {
    return this.vegetationDataRef;
  }

  addVegetationData(vegetation: Vegetation)
  {
    console.log(vegetation);
    return this.vegetationDataRef.push(vegetation);
  }
}
