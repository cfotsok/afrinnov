import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/helpers/person';
import { ReadTeamService } from 'src/app/services/read-team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team!: Person[];

  constructor(private readTeamService: ReadTeamService) { }

  ngOnInit() {
    this.readTeamService.getTeam().subscribe((response: Person[]) => {
      this.team = response;
    })
  }
}
