import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'components-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent implements OnInit,OnChanges,OnDestroy {
 
  @Input()
  public prices:number = 0;

  public intevarl$?:Subscription;
 
 ngOnInit(): void {
   console.log('ngInit-prices:');
   this.intevarl$ =  interval(1000).subscribe(value => console.log(`tick: ${value}` ))
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnchanges-prices');
   console.log({changes})
 }
 ngOnDestroy(): void {
   console.log('ngOnDestroy-price');
   this.intevarl$?.unsubscribe();
 }





}
