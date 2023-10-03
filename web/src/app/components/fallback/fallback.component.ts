import { Component, OnInit, inject } from '@angular/core';
import { MatDialogDecorator } from 'src/app/core/decorators/dialog.decorator';
import { CustomPopupComponent } from '../dialog/custom-popup/custom-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.scss']
})
export class FallbackComponent implements OnInit {
 demo="kmkmk";
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){

  }

}
