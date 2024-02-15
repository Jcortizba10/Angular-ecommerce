
import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 @Input({required:true}) duration:number = 0;
 @Input({required:true}) message:string = "";
 counter = signal(0);
 counterRef: number | undefined;

 constructor(){
  console.log('constructor');
  console.log('-'.repeat(10))
 }

 ngOnChanges(changes: SimpleChanges) {
  // before and during render
  console.log('ngOnChanges');
  console.log('-'.repeat(10));
  console.log(changes);
  const duration = changes['duration'];
  if (duration && duration.currentValue !== duration.previousValue){
    this.doSomething();
  }
  }

 ngOnInit(){
  console.log("hola ngOnInit");
  console.log("-",repeat(10));
  console.log("duration =>",this.duration);
  console.log("message =>",this.message);
  this.counterRef = window.setInterval(()=> {
    console.log('run intervale')
    this.counter.update(statePrev => statePrev + 1);
  },1000)
 }
 ngAfterViewInit(){
  console.log('ngAfeViewInit');
  console.log('-'.repeat(10));
 }
 ngOnDestroy(){
  console.log('ngAfeViewInit');
  console.log('-'.repeat(10));
  window.clearInterval(this.counterRef);
 }
 doSomething(){
  console.log("change duration")
 }
}
