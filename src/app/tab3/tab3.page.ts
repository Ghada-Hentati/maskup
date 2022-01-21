import {  Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  
  public newData :any;

  constructor(public api:AuthService) {}

  ngOnInit(): void {
    this.api.getSpecialData().subscribe(result => {
      console.log(result);
      this.newData=result;
    })
  }

  
 
}
