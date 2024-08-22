import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private dataSubject = new BehaviorSubject<string>('');
  currentData = this.dataSubject.asObservable();

  updateData(data: string) {
    this.dataSubject.next(data);
  }
}
