import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some of my FAVORITE things.....'
  image1 = 'https://i.pinimg.com/236x/d0/b8/71/d0b8712f0bbeb16f39b2da068ed5e8be.jpg';
  image2 = 'https://i.pinimg.com/236x/14/65/4c/14654c26d4295af9d20cfad33e378496.jpg';
  image3 = 'https://i.pinimg.com/236x/d3/2b/d6/d32bd615ebda1a48cde58f37ad50f1b9.jpg';

  constructor() { }

  ngOnInit() {
  }

}