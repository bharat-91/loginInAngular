import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // public counter :number = 0
  // @Output() onSpawn:EventEmitter<any> = new EventEmitter()
  // @Output() onKill:EventEmitter<any> = new EventEmitter()
  @Input() name!:string
  @Output() testT:EventEmitter<any> = new EventEmitter()
  test(){
    this.testT.emit()
  }
}
