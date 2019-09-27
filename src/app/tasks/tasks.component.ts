import { Component, OnInit } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {
  private taskList;
  private newItem;

  constructor(private taskService: TasksService) { }

  getlist() {
    return this.taskService.get().then(l => {
      this.taskList = l;
    });
  }

  addTask() {
    this.taskService.add({ task_name: this.newItem }).then(() => {
      return this.getlist();
    }).then(() => {
      this.newItem = ''; // clear input form value
    });
  }

  ngOnInit() {
    this.getlist();
  }

}
