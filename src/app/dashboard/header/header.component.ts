import { Component, Output } from '@angular/core';
import { EventEmitter } from 'prompt';
import { SearchService } from 'src/app/services/search.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchedItem:string='';
  constructor(private searchService:SearchService,private filterService:FilterService){}

    //Search functionality : To Provide the seacrched string to my NotesContainer Component
    onSearch(){
      console.log("search button is clicked")
      this.searchService.updateData(this.searchedItem);
    }

  onFilterChange() {
    const filters = {
      price: (document.getElementById('price') as HTMLSelectElement).value,
      rating: (document.getElementById('rating') as HTMLSelectElement).value,
      delivery: (document.getElementById('delivery') as HTMLSelectElement).value
    };
    this.filterService.setFilters(filters);
  }
}
