import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Observable, Subscription } from 'rxjs'
import { getCounter } from 'src/app/shared/store/counter.selector';
import { AppStateModel } from 'src/app/shared/store/Global/App.Model';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  counterdisplay!: number;
  channelName!: string;
  counterSubscribe!: Subscription
  counter$!: Observable<CounterModel>

  constructor(private store: Store< AppStateModel >) {

  }

  ngOnDestroy(): void {
    if(this.counterSubscribe){
      this.counterSubscribe.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterdisplay = data
      //this.channelName = data.channelName
    })
    //this.counter$=this.store.select('counter')
  }

  


}
