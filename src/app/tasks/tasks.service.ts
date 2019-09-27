import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  taskUrl = 'http://localhost:3000/tasks';

  async get(page) {
    const response = await this.http.get(`${this.taskUrl}/?page=${page}`).toPromise();
    return new Promise(resolve => resolve(response));
  }

  async add(data) {
    const response = await this.http.post(this.taskUrl, data).toPromise();
    return new Promise(resolve => resolve(response));
  }

  async delete(id) {
    const response = await this.http.delete(`${this.taskUrl}/${id}`).toPromise();
    return new Promise(resolve => resolve(response));
  }

}
