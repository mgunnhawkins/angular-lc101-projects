import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://trello.com/', 'https://education.launchcode.org/', 'https://fonts.google.com/']
  constructor() { }

  ngOnInit() {
  }

}
