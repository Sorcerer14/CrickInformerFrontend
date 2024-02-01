import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeaguePointTableComponent } from './pages/league-point-table/league-point-table.component';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { MatchHistoryComponent } from './pages/match-history/match-history.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        title: "Home | CrickGuru"
    },
    {
        path: "match-history",
        component: MatchHistoryComponent,
        title: "Match-History | CrickGuru"
    },
    {
        path: "live-scores",
        component: LiveScoreComponent,
        title: "Live-Scores | CrickGuru"
    },
    {
        path: "point-table",
        component: LeaguePointTableComponent,
        title: "Points-Table | CrickGuru"
    },
];
