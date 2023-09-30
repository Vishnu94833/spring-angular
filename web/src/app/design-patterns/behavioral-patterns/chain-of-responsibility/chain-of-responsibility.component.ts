import { Component, OnInit } from '@angular/core';
import ATMDispenserChain from './model/atm-dispenser-chain';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.scss'],
})
export class ChainOfResponsibilityComponent implements OnInit {
  inputValue:string = "";
  constructor() {}

  ngOnInit(): void {
    
    console.log('Enter amount to withdrawal : ');
   
  }


  getAmount(data:string){
    const ATM = new ATMDispenserChain();
    if (parseInt(data)) {
      const amount = parseInt(data);
      if (amount < 10 || amount % 10 != 0) {
        console.log('Amount should be positive and in multiple of 10s.');
      } else {
        // process the request
        ATM.chain1.handle(amount);
        console.log('Now go spoil yourself');
      }
    } else {
      console.log('Please enter a number.');
    }
  }

}
