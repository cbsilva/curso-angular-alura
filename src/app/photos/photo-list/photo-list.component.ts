import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRouter: ActivatedRoute
  ){ }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  ngOnInit(): void {
    this.photos = this.activatedRouter.snapshot.data.photos;
    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
  }
}
