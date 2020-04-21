import {Component, OnInit} from '@angular/core';
import {Task} from './beans/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  tasks: Task[] = [];

  ngOnInit(){
    const tasksAsJson = localStorage.getItem('chips');

    this.tasks = JSON.parse(tasksAsJson) || [] ;
   }


  addChip($event: Task) {
    console.log($event);
    this.tasks.push($event);
    localStorage.setItem('chips', JSON.stringify(this.tasks));
  }
}
