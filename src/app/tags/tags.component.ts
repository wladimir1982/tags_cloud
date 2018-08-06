import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tag} from '../shared/interfaces';
import {TagsService} from '../shared/services/tags.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit, OnDestroy {

  public tags: Tag[];
  public filter: Tag[];
  public isLoaded = false;
  public tSub: Subscription;

  constructor(private tagsService: TagsService) {
  }

  ngOnInit() {
    this.tSub = this.tagsService.getAllTags().subscribe((tag: Tag[]) => {
      this.tags = tag;
      this.filter = this.tags;
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }

}
