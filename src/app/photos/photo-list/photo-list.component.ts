import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private photoService: PhotoService
  ){ }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  ngOnInit(): void {
    this.userName = this.activatedRouter.snapshot.params.userName;
    this.photos = this.activatedRouter.snapshot.data.photos;
    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
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
