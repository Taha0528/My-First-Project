import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public navbar_T:boolean=true;
  
  public imgpath: string="http://www.colostomyuk.org/wp-content/uploads/2016/10/facebook-banner-pictures-6.png"
  public SelectLock:boolean=false;

  ngOnInit() {
  }

}
