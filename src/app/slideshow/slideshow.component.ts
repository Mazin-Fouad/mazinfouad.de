import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  images = ['code.jpg', 'laptop.jpg', 'universty.jpg'];
  headlines = [
    'Bringing engineering to next level',
    'Born to code',
    'Graduated at Developer Akademie',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      this.imageSwitch();
    }, 8000);
  }

  imageSwitch() {
    setTimeout(() => {
      this.showImage = true;
    }, 10);
  }
}
