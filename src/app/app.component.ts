import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photos } from './photos/photo/photos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos: Photos[] = [ ];

  constructor(photoService: PhotoService){
    photoService.listFromUser('flavio')
      .subscribe((photos) => {
        console.log(photos[0].postDate);
        this.photos = (photos);
    });
  }


}
