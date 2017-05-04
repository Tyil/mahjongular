import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    { label: "Home", url: "#home" },
    { label: "Create game", url: "#create" },
    { label: "About", url: "#about"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
