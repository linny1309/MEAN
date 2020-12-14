import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  customHeader: string[];

  toggleSidebar() {
    if(document.getElementById("sidebar").style.visibility == "visible") {
      document.getElementById("sidebar").style.visibility = "hidden";
      document.getElementById("sidebar").style.opacity = "0";
    }
    else {
      document.getElementById("sidebar").style.visibility = "visible";
      document.getElementById("sidebar").style.opacity = "1";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
