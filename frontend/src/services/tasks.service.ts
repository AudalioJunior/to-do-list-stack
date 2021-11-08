import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly API = 'http://localhost:3000/';

  constructor(private readonly http: HttpClient) { }

  async getTasks(){
    return await this.http.get<any>(this.API + 'todo/getTasks').toPromise()
  }

  async createTask(title: string, content: string){
    return await this.http.post<any>(this.API + 'todo/createTask', {
      title: title,
      content: content
    }).toPromise();
  }

  async checkedTask(id: string, select: boolean){
    return await this.http.put<any>(this.API + 'todo/markTask', {
      _id: id,
      select: select
    }).toPromise();
  }

  async deleteTask(id: string){
    return await this.http.delete<any>(this.API + `todo/deleteTask/${id}`).toPromise();
  }

  async deleteTaskAll(){
    return await this.http.delete<any>(this.API + `todo/deleteTaskAll`).toPromise();
  }
}
