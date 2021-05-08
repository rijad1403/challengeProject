import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-select-influencer',
  templateUrl: './select-influencer.component.html',
  styleUrls: ['./select-influencer.component.css']
})
export class SelectInfluencerComponent implements OnInit {
  influencers: any[];
  loading = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getInfluencers(1).subscribe(
      data => {
        this.influencers = data.results;
      },
      error => { },
      () => {
        this.loading = false;
      }
    );
  }

  assignInfluencers(id: number) {
    const influencers = {
      users: ['1', '2', '3']
    };
    this.userService.assignInfluencers(influencers).subscribe(data => {
      console.log(data);
    })

  }

}
