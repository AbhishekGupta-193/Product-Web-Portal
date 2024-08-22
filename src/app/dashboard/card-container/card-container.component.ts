import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  // cards = Array(10).fill(0);
  products: any;

  constructor(private http:HttpService,private dialog:MatDialog){}

  ngOnInit(){
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
  }

  openDialog(product: any): void {
    this.dialog.open(ProductDetailDialogComponent, {
      data: product
    });
  }
}
