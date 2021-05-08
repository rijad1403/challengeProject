import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsFeedService } from '../shared/services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  loading: boolean;
  posts: any[];
  newPostForm: FormGroup;
  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
    this.newPostForm = new FormGroup({
      text: new FormControl(''),
      image: new FormControl(null)
    });
    this.loading = true;
    this.newsFeedService.getNews().subscribe(data => {
      this.posts = data.results;
      this.loading = false;
    });
  }

  likePost(post) {
    post.isLikedByUser = !post.isLikedByUser;
    if (post.isLikedByUser) {
      post.likesCount++;
    } else {
      post.likesCount--;
    }
    this.newsFeedService.likePost({ post: post.id }).subscribe(data => {
      console.log(data);
    })
  }

  addPost() {
    const post = this.newPostForm.value;
    this.newsFeedService.addPost(post).subscribe(data => {
      this.posts.unshift(data);
    }
    );
  }

}
