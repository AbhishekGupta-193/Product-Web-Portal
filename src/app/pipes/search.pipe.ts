import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(productList:any[], searchedItem: string): any[] {
    console.log("Pipe is ON")
    if(!productList || !searchedItem){
      return productList;
    }
    return productList.filter(

      (product)=>product.name.toLowerCase().includes(searchedItem.toLowerCase())
       || product.description.toLowerCase().includes(searchedItem.toLowerCase())

      );
  }

}
