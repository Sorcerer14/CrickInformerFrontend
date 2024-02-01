import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchCardComponent } from '../../card-component/match-card/match-card.component';
import { RESTApiCallService } from '../../services/rest-api-call.service';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [CommonModule, MatchCardComponent, NgxTypedJsModule],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit {

  liveMatches: any;
  loading = false;

  constructor(private _api: RESTApiCallService) {

  }

  ngOnInit(): void {
    this.loadLiveComponent();
  }

  private loadLiveComponent() {
    this.loading = true
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data;
        this.loading = false
      },
      error: error => {
        console.log(error);
        this.loading = false
      }
    });
  }

  refreshScore() {
    this.loadLiveComponent()
  }
}
