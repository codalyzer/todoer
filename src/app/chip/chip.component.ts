import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../beans/Task';
import {NameService} from '../services/name.service';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  providers: [NameService, {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}]
})
export class ChipComponent implements OnInit {

  task: Task = new Task();

  constructor(private nameService: NameService, private _adapter: DateAdapter<any>) {
    this._adapter.setLocale('de-DE');
  }


  @Output('addTask')
  taskEmitter = new EventEmitter<Task>();

  ngOnInit(): void {
    this.initTask();
  }

  emitTask() {
    console.log(this.task);
    let emittedTask = new Task();
    emittedTask.name = this.task.name;
    emittedTask.description = this.task.description;
    emittedTask.fixdate = this.task.fixdate;

    this.taskEmitter.emit(emittedTask);

    this.initTask();
  }

  private initTask() {
    this.task = new Task();
    this.task.name = this.nameService.getRandomName();
  }
}
