import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://lh3.googleusercontent.com/Mfoqy0sbdcMGs-Etzl5VQgWLQyjEgei6WSuaYwm7UR1BLJ1LPIcvf3KMM-3sSbsH9QOa33f3kBOFA0c-VBvOcJk6Sap8SFC1mgsfombLF1_Mej_GLUDYnb44duOikbeLi1r0X3nzlhY=w2400';
  image2 = "https://lh3.googleusercontent.com/tsWZYaTP0fn_HMMrmIbxfUYPsVSIx53GFckdTw9wW1xcVIHsXTujfYOtScITp0oRYFA-V73WQVimoaJ2EczmIHui_bhURh6v3zshxrBOGxPC3gXefNr4vFz05fLpr9QTti_gE0fx3UM=w2400";
  image3 = 'https://lh3.googleusercontent.com/uHgek8CuRNZAmaMNJ-wqFYQe4BhwHLbY17ggj0mWcnQHqirZ5VDvb9KVQxtXzVZRfTfpD29UUQSvnnhR9xzC_r7nD-KgyfpwyWdgywSod7-yEmvGIGLCAxA-KBoYGWy8Nod3M3HA-_E=w2400';

  constructor() { }

  ngOnInit() {
  }

}
