import { inject, Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected url = 'http://localhost:3000/locations';
  private http = inject(HttpClient);

  getAllHousingLocations(): Observable<HousingLocationInfo[]> {
    return this.http.get<HousingLocationInfo[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<(HousingLocationInfo | undefined)[]> {
    return this.http.get<HousingLocationInfo[]>(`${this.url}?id=${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string, id: number) {
    console.log(
      `Homes application for ${id} received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
