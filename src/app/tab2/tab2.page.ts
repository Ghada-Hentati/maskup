import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  public passedId : string = null;
  

  constructor(private activatedRoute: ActivatedRoute ) {}

  ngOnInit(){
    this.passedId = this.activatedRoute.snapshot.paramMap.get('myid');
  }


}
