import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if (descriptionQuery)
        {
            // sera realizado a busca pelo conteudo digitado em descriptionQuery
            // no array de photos
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(descriptionQuery));
        } else {
            return photos;
        }

    }

}
