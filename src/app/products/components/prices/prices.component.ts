import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'components-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent implements OnInit,OnChanges,OnDestroy {
 
 
 ngOnInit(): void {
   console.log('ngInit-prices:');
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnchanges-prices');
   console.log({changes})
 }
 ngOnDestroy(): void {
   console.log('ngOnDestroy-price');
 }

 @Input()
 public prices:number = 0;



}
