import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Tag} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('https://tagscloud-f6dc3.firebaseio.com/tags.json');
  }
}
