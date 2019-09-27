import { Component, OnInit } from '@angular/core';

import { TasksService } from './tasks.service';

declare var UIkit: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {
  private taskList;
  private newItem;
  private currentPage = 1;

  constructor(private taskService: TasksService) { }

  getlist() {
    return this.taskService.get(this.currentPage).then(l => {
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

  deleteTask(id) {
    this.taskService.delete(id).then(() => {
      return this.getlist();
    }).then(() => {
      this.newItem = ''; // clear input form value
    });
  }

  LastPage() {
    if (this.currentPage !== 1) {
      this.currentPage--;
    }
    return this.getlist();
  }

  NextPage() {
    this.currentPage++;
    return this.getlist();
  }

  ngOnInit() {
    this.getlist();
  }

}
