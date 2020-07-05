import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private photoService: PhotoService
  ){ }



  ngOnInit(): void {
    this.userName = this.activatedRouter.snapshot.params.userName;
    this.photos = this.activatedRouter.snapshot.data.photos;
  }


  load()
  {
    this.photoService
        .listFromUserPagineted(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.photos = this.photos.concat(photos);

          // tslint:disable-next-line: curly
          if (this.photos.length) this.hasMore = false;
    });
  }
}
