import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {TagsService} from '../shared/services/tags.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Tag} from '../shared/interfaces';
import {mergeMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.css']
})
export class TagPageComponent implements OnInit, OnDestroy {
  public tag: Tag;
  public id: string;
  public totalMentions: number;
  public items: string;
  public isLoaded = false;
  public tSub: Subscription;

  constructor(private location: Location, private tagsService: TagsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tSub = this.route.params
      .pipe(
        mergeMap((params: Params) => {
          this.id = params['id'];
          return this.tagsService.getAllTags();
        })
      )
      .subscribe((tags: Tag[]) => {
        this.tag = tags.find((a) => a.id === this.id);
        this.totalMentions = this.getSumMentions(this.tag.sentiment.negative, this.tag.sentiment.neutral, this.tag.sentiment.positive);
        this.items = Object.keys(this.tag.pageType).toString().replace(/,(?=[^\s])/g, ', ');
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }

  getSumMentions(a = 0, b = 0, c = 0): number {
    return a + b + c;
  }

  goBack(): void {
    this.location.back();
  }
}
