import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any;
  constructor() { }

  ngOnInit() {
    this.news = [
      {id: 1, title: 'Title 1', infoDate: '16/10/2020', name: 'Abderahmen',
      img1: 'assets/images/person_1.jpg', img2: 'assets/images/person_1.jpg'},
      {id: 2, title: 'Title 2', infoDate: '10/10/2020', name: 'Sleh',
      img1: 'assets/images/person_1.jpg', img2: 'assets/images/person_1.jpg'},
      {id: 3, title: 'Title 3', infoDate: '11/10/2020', name: 'Ali',
      img1: 'assets/images/person_1.jpg', img2: 'assets/images/person_1.jpg'},
      {id: 4, title: 'Title 4', infoDate: '12/10/2020', name: 'Karim',
      img1: 'assets/images/person_1.jpg', img2: 'assets/images/person_1.jpg'},
      {id: 5, title: 'Title 5', infoDate: '12/10/2020', name: 'Karim',
      img1: 'assets/images/person_1.jpg', img2: 'assets/images/person_1.jpg'}
    ]
  }

}
