import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoComponent } from './photo/photo.component';
import { CardModule } from '../shared/components/card.module';



@NgModule({
    declarations: [],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        CardModule
    ],
    exports: [PhotoComponent]

})

export class PhotosModule { }
