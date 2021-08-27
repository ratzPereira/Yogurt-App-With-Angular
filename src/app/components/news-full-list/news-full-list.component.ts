import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ygr-news-full-list',
  templateUrl: './news-full-list.component.html',
  styleUrls: ['./news-full-list.component.scss'],
})
export class NewsFullListComponent implements OnInit, OnDestroy {
  posts: any = [];
  subscription: Subscription;

  constructor(private _postsService: PostsService) {
    this.subscription = this.getAllPosts();
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllPosts() {
    return this._postsService.getPosts().subscribe((response: any) => {
      this.posts = response.data;
    });
  }
  getContentSnapshot(text: string) {
    const snapShot = text.slice(0, 200);
    return `${snapShot}...`;
  }
}
