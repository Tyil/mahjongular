import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  links = [
    { label: "Home", path: "" },
    { label: "Games", path: "games" },
  ];

  @Input() title: string;

  constructor() { }

  ngOnInit() { }

}
