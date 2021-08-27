import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { News } from '../../services/models/news';



@Component({
  selector: 'ygr-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  posts: any = [];
  numberOfPosts = 3

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.getSomePosts()
  }

  getSomePosts() {
    this._postsService.getSomePosts(this.numberOfPosts).subscribe((response: any)=> {
      this.posts = response.data
      console.log(this.posts)
    })
  }

  getContentSnapshot(text: string) {

    const snapShot = text.slice(0,200)
    return `${snapShot}...`
  }

}
