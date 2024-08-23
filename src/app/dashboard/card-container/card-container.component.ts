import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from 'src/app/services/search.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  products: any;
  searchedItem:string='';
  filters: any = {};
  constructor(private http:HttpService,private dialog:MatDialog,private searchService:SearchService,private filterService:FilterService){}

  ngOnInit(){
    //API CALL TO GET THE PRODUCTS DATA
    this.http.getProducts().subscribe({
      next: (res: any) => {
        this.products=res;
        console.log(res);
      },
      error: (err: string) => {
        alert("Failed");
        console.log(err);
      }
    })

    
    //SearchService for Search Bar in Header
    this.searchService.currentData.subscribe(data => {
      this.searchedItem = data;
    })

    this.filterService.filters$.subscribe(filters => {
      this.filters = filters;
      this.applyPriceFilter();
      this.applyRatingFilter();
      this.applyDeliveryFilter();
    });
  }

  //DATA PASSING TO DIALOG BOX
  openDialog(product: any): void {
    this.dialog.open(ProductDetailDialogComponent, {
      data: product
    });
  }

 
  applyDeliveryFilter() {
    let filteredData = [...this.products];

    if (this.filters.delivery === 'fast') {
      filteredData.sort((a, b) => a.delivery_days - b.delivery_days);
    } else if (this.filters.delivery === 'slow') {
      filteredData.sort((a, b) => b.delivery_days - a.delivery_days);
    }
    this.products = filteredData;
  }
  applyRatingFilter() {
    let filteredData = [...this.products];

    if (this.filters.rating === 'low') {
      filteredData.sort((a, b) => a.rating - b.rating);
    } else if (this.filters.rating === 'high') {
      filteredData.sort((a, b) => b.rating - a.rating);
    }
    this.products = filteredData;
  }

  applyPriceFilter() {
    let filteredData = [...this.products];

    if (this.filters.price === 'low') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (this.filters.price === 'high') {
      filteredData.sort((a, b) => b.price - a.price);
    }
    this.products = filteredData;
  }
  

}

