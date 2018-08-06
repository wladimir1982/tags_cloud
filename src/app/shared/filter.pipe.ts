import {Pipe, PipeTransform} from '@angular/core';
import {Tag} from './interfaces';


@Pipe({
  name: 'tagFilter',
  pure: false
})

export class FilterPipe implements PipeTransform {


  transform(tags: Tag[], filter: Tag): Tag[] {

    if (!tags || !filter) {
      return tags;
    }
    return tags.filter((tag: Tag) => this.applyFilter(tag, filter));
  }


  applyFilter(tag: Tag, filter: Tag): boolean {
    for (const field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (tag[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
