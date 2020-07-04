import { Component, OnInit } from '@angular/core';
import { DataService } from './../../common/services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public questions = {
    answered : [],
    unanswered: []
  }
  public request = {
    order: 'desc',
    sort: 'activity',
    tagged: '',
    title: '',
    site: 'stackoverflow'
  }
  public selectedTab = 'answered';
  public favourites = [];
  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.favourites = JSON.parse(localStorage.getItem('favourites')) ? JSON.parse(localStorage.getItem('favourites')) : [];
    this.getData();
  }


  // Get data from the stack exchange api by passing the search params.
  public getData(): void {
    this.questions = {
      answered : [],
      unanswered: []
    }
    this.data.getQuestions(this.request, response => {
      if(response) {
        response.items.forEach(item => {
          if(item.is_answered) {
            this.questions.answered.push(item);
          } else {
            this.questions.unanswered.push(item);
          }
        });
        console.log(this.questions);
      }
    }, error => { })
  }

  // method to logout the user.
  public logout(): void {
    localStorage.removeItem('favourites');
    sessionStorage.removeItem('Auth');
    this.router.navigate(['auth/']);
  }

  // method to mark the user as favourite.
  public markAsFavourite(item): void {
    console.log(item, 'favourite')
    item.isFavourite = true;
    if (!this.favourites.includes(item)) {
      this.favourites.push(item);
      localStorage.setItem('favourites', JSON.stringify(this.favourites))
    }
  }

}
