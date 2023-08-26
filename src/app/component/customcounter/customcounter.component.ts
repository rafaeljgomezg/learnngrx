import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs'
import { Store } from '@ngrx/store';
import { customincrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getChannelName } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit{
  counterinput!: number;
  actionType="add"
  channelName=""
  counterSubscribe!: Subscription;

  constructor(private store: Store<{ counter: CounterModel }>) {

  }
  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getChannelName).subscribe(data => {
      this.channelName = data
    })
  }

  onIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterinput, action:this.actionType }))
  }
}
