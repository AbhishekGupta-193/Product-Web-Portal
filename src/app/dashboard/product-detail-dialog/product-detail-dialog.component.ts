import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private http:HttpClient) {}

  newReview: string = '';
  isBtnClicked:boolean=true;

  //FUNCTION TO ADD REVIEW USING API PATCH REQUEST
  addReview() {
    this.isBtnClicked=true;
    if (this.newReview.trim()) {
      const updatedReviews = [...this.data.reviews, this.newReview];
      this.http.patch(`http://localhost:3000/products/${this.data.id}`, { reviews: updatedReviews })
        .subscribe({
          next: (res) => {
            this.data.reviews = updatedReviews;
            this.newReview = '';
            alert('Review added successfully');
          },
          error: (err) => {
            console.error('Error adding review:', err);
            alert('Failed to add review');
          }
        });
    }
  }
}
