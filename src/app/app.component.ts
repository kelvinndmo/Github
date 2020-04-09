import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dipR';
  users: any = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUsers().subscribe((users) => {
      this.users = users
      console.log(this.users)
    })
    this.githubService.getUser('kelvinndmo').subscribe((user) => {
      console.log(user)
    })
  }
}
