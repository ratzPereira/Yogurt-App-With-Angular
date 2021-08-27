import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'ygr-news-full-list',
  templateUrl: './news-full-list.component.html',
  styleUrls: ['./news-full-list.component.scss']
})
export class NewsFullListComponent implements OnInit {

  posts: any = []

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this._postsService.getPosts().subscribe((response: any)=> {
      this.posts = response.data
     
    })
  }
  getContentSnapshot(text: string) {

    const snapShot = text.slice(0,200)
    return `${snapShot}...`
  }
}
