import { 
    AfterContentChecked, 
    AfterContentInit, 
    AfterViewChecked, 
    AfterViewInit, 
    Component, 
    DoCheck, 
    OnChanges, 
    OnDestroy, 
    OnInit, 
    SimpleChanges
  } from '@angular/core';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy{
  
  public isProductVisable: boolean = false;
  public currentPrice: number = 10;
  constructor(){
    console.log('constructor');
  }
  

  ngOnInit(): void {
    console.log('ngOnInt');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  } 

  increasePrices(){
    this.currentPrice++;
  }

}
