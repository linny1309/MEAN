import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  demoLoop: number[] = [1,2,3,4,5,6,7,8,9,0];

  constructor() { }

  hover(hovering: boolean, index: number) {
    if(hovering)
      document.getElementById("user"+index).style.backgroundColor = "rgb(0, 35, 0)";
    else if(document.getElementById("expand"+index).innerHTML != "expand_less")
      document.getElementById("user"+index).style.backgroundColor = "rgb(70, 111, 101)";
  }

  togglePanel(panel: HTMLElement, index: number) {
    if(panel.style.display == "block") {
      panel.style.display = "none";
      document.getElementById("expand"+index).innerHTML = "expand_more";
      document.getElementById("user"+index).style.backgroundColor = "rgb(70, 111, 101)";
    }
    else {
      panel.style.display = "block";
      document.getElementById("expand"+index).innerHTML = "expand_less";
      document.getElementById("user"+index).style.backgroundColor = "rgb(0, 35, 0)";
    }
  }

  toggleFilter() {
    if(document.getElementById("filterContainer").style.height == "100%") {
      document.getElementById("filterContainer").style.height = "30px";
    }
    else {
      document.getElementById("filterContainer").style.height = "100%";
    }
  }

  ngOnInit(): void {
  }

}
