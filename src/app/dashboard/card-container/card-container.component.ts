import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  products: any;
  searchedItem:string='';
  constructor(private http:HttpService,private dialog:MatDialog,private searchService:SearchService){}

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
  }

  openDialog(product: any): void {
    this.dialog.open(ProductDetailDialogComponent, {
      data: product
    });
  }
}
