import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TagsComponent} from './tags/tags.component';
import {TagPageComponent} from './tag-page/tag-page.component';

const routes: Routes = [
  {path: '', component: TagsComponent},
  {path: 'tag', component: TagPageComponent},
  {path: 'tag/:id', component: TagPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
