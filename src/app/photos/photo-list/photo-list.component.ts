import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRouter: ActivatedRoute
  ){ }

  ngOnInit(): void {

    // recupera a informacao da rota corrente
    const username = this.activatedRouter.snapshot.params.username;

    this.photoService.listFromUser(username)
    .subscribe((photos) => {
      this.photos = (photos);
  });
  }
}
