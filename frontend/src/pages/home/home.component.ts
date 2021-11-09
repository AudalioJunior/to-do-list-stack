import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:any[] = Array();

  constructor(private taskService: TasksService) { }

  async ngOnInit() {
	  await this.getTasks();
  }

  async getTasks(){
	const response = await this.taskService.getTasks();
	this.items = response.tasks;
  }

  async addTask($event: any){
    let title = $event.title;
    let content = $event.content;
    await this.taskService.createTask(title, content);
    await this.getTasks()
  }

  async deleteTask($event: any){
    let id = $event;
    await this.taskService.deleteTask(id);
    await this.getTasks();
  }

  async markTask($event: any){
    let id = $event._id;
    let select = $event.select;
    if(select === undefined){
      select = true;
    }
    await this.taskService.checkedTask(id, select);
  }

  async deleteAll(){
    await this.taskService.deleteTaskAll();
    await this.getTasks();
  }
}
