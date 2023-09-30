import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import CastleDirector from './model/castle-director';
import HouseBoatDirector from './model/houseboat-director';
import IglooDirector from './model/igloo-director';

enum BuilderTypes {
  IGLOO = 'Igloo',
  CASTLE = 'Castle',
  HOUSE_BOAT = 'HouseBoat',
}

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  vm: string = 'Select Builder Type';
  classType: string = 'default';
  data: any;
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.data = this.globalService.data;
  }

  buildHandler(builderTypes: string) {
    switch (builderTypes) {
      case BuilderTypes.IGLOO:
        this.classType = BuilderTypes.IGLOO.toLocaleLowerCase();
        this.vm = IglooDirector.construct().construction();
        break;
      case BuilderTypes.CASTLE:
        this.classType = BuilderTypes.CASTLE.toLocaleLowerCase();
        this.vm = CastleDirector.construct().construction();
        break;
      case BuilderTypes.HOUSE_BOAT:
        this.classType = BuilderTypes.HOUSE_BOAT.toLocaleLowerCase();
        this.vm = HouseBoatDirector.construct().construction();
        break;
      default:
        this.vm = 'Error';
        break;
    }
  }

  classHandler() {
    return this.classType;
  }

  saveData() {
    // this.data.Address = "Mumbai"
    this.globalService.saveData();
  }
}
