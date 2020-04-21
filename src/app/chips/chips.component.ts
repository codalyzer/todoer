import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../beans/Task';


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  @Input()
  tasks: Task[] = [];

  selectable = true;
  removable = true;

  constructor() { }

  ngOnInit(): void {
  }

  remove(task: Task) {
    console.log('remove:' + task.name);
    const index = this.tasks.indexOf(task);

    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

}
