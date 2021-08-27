import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ygr-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {


  post : any = []
  id:any;

  constructor(private _postService : PostsService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.getPostDetails()
    
  }
  ngOnInit(): void {
    
  }
  getPostDetails() {
    this._postService.getPostById(this.id).subscribe((response: any)=> {
      this.post = response.data
      console.log(this.post)
    })
  }

}
