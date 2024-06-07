import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public counter: number = 0
  public spawn_counter: number = 0
  public total_demon : number = 0
  constructor() { }

  spawnDemon(){
    this.spawn_counter += 1
    this.total_demon = this.counter + this.spawn_counter
    }
    
    killDemon(){
      this.counter -= 1
      this.total_demon = this.counter - this.spawn_counter
  }
}
