import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../helpers/person';

@Injectable({
  providedIn: 'root'
})
export class ReadTeamService {
  private teamUrl = 'assets/datas/team.json';

  constructor(private http: HttpClient) { }

  getTeam() {
    return this.http.get<Person[]>(this.teamUrl);
  }
}
