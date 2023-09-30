import { Component, OnInit } from '@angular/core';
import { GlobalService } from './service/global.service';

export class Cases {
  CreatedBy: string = '';
  CreatedTimestamp: string = '';
  UpdatedTimestamp: string = '';
  CustomerFirstName: string = '';
  CustomerLastName: string = '';
  CustomerName: string = '';
  CustomerId: string = '';
  CustomerPhone: string = '';
  CustomerEmail: string = '';
  CaseId: string = '';
  CaseDescription: string = '';
  CaseTitle: string = '';
  Description: string = '';
  CaseStatusId: string = '';
  CasePriorityId: string = '';
  DueDate: string = '';
  AssignedToId: string = '';
  AssignedToFirstName: string = '';
  AssignedToLastName: string = '';
  CaseCategoryId: string = '';
  CaseOriginId: string = '';
  CaseResolutionId: string = '';
  OrderNo: string = '';
  AssignorFromId: string = '';
  AssignorFirstName: string = '';
  AssignorLastName: string = '';
  CaseSubCategoryId: string = '';
  Age: string = '';
  Actions: any = '';
  InteractionStatus: any = '';
  CaseTimeline: any = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-dev';

  countryList = [
    {
      key: 1,
      value: 'One',
    },
    {
      key: 2,
      value: 'Two',
    },
    {
      key: 3,
      value: 'Three',
    },
  ];
  addAddress = {
    FirstName:'',
    LastName:"",
    Phone:"",
    Email:""
  }

  requiredFieldsMap = new Map();
  selectValue = 2;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    // let obj: Cases = new Cases();
    // Object.entries(obj).forEach((e) => {
    //   this.requiredFieldsMap.set(e[0], false);
    // });
    // this.onSelection(this.selectValue);
    this.globalService.getUsers()
    .subscribe((res)=>{
      console.log("Users_List: ", res);
      
    })
  }

  onSelection(res: any) {
    // console.log(res);

    if (res === 2) {
      this.requiredFieldsMap.set('CustomerFirstName', true);
      this.requiredFieldsMap.set('CustomerLastName', true);
      this.requiredFieldsMap.set('CustomerEmail', true);
      this.requiredFieldsMap.set('CustomerPhone', true);
      // console.log(this.requiredFieldsMap);
    } else if (res === 3) {
      this.requiredFieldsMap.set('CustomerFirstName', true);
      this.requiredFieldsMap.set('CustomerLastName', true);
      this.requiredFieldsMap.set('CustomerEmail', true);
      this.requiredFieldsMap.set('CustomerPhone', false);
    } else {
      this.requiredFieldsMap.clear();
    }
  }
}

// service.ts
