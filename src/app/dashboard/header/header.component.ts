import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchedItem:string='';
  constructor(private searchService:SearchService){}
  
    //Search functionality : To Provide the seacrched string to my NotesContainer Component
    onSearch(){
      console.log("search button is clicked")
      this.searchService.updateData(this.searchedItem);
    }
}
