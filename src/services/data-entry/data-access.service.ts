import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {} from 'angularfire2/storage'
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import {Tombstone} from "../../models/tombstone/tombstone.interface";
import {Timeline} from "../../models/timeline/timeline.interface";

@Injectable()
export class DatabaseAccessService
{
  private vegetationDataRef = this.database.list<Vegetation>("vegetation-list");
  private tombstoneDataRef = this.database.list<Tombstone>("tombstone-list");
  private timelineDataRef = this.database.list<Timeline>("timeline-list");

  constructor(private database: AngularFireDatabase)
  {

  }

  getVegetationData()
  {
    return this.vegetationDataRef;
  }

  addVegetationData(vegetation: Vegetation)
  {
    return this.vegetationDataRef.push(vegetation);
  }

  getTombstoneData()
  {
    return this.tombstoneDataRef;
  }

  addTombstoneData(tombstone: Tombstone)
  {
    return this.tombstoneDataRef.push(tombstone);
  }

  getTimelineData()
  {
    return this.timelineDataRef;
  }

  addTimelineData(timeline: Timeline)
  {
    return this.timelineDataRef.push(timeline);
  }
}
