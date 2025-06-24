import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HousingLocationInfo} from '../housinglocation';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation, FormsModule],
  template: `
    <section>
      <form (keydown.enter)="filterResults(filter.value)">
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation.id){
        <app-housing-location
        [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
  styleUrl: './home.scss'
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

}