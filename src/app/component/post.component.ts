import {Component}  from '@angular/core';
import {PostListComponent} from './post-list.component';
import {PostService} from '../service/post.service';

@Component({
    selector: 'post-parent',
    template: `
        <h2>View Posts</h2>
        <post-list></post-list>
    `,
    providers: [PostService]
})
export class PostComponent {
}