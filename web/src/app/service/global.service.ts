import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  data:any = {
    FirstName: 'Vishnu',
    LastName: 'Kuppan',
    Address: 'Bengaluru',
  };
  constructor(private httpClient: HttpClient) {}

  saveData() {
    console.table(this.data);
  }

  getUsers():Observable<any>{
    return this.httpClient.get("./users")
  }
}
