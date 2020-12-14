import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: string[] = ['Registration', 'Users'];
  menuIcons: string[] = ["login",'person'];

  mobileComponents: string[] = ["userCreate","userList"];
  expandedComponents: string[];

  changeNav(id: string) {
    this.mobileComponents.forEach((element) => {
      document.getElementById(element).style.visibility = "hidden";
    });
    document.getElementById(id).style.visibility = "visible";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
