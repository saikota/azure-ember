import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TaskController extends  Controller {
  @action
  createTask(tasksFormObj){
    return fetch('/api/CreateTask', {
      method: 'post',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        name:tasksFormObj.taskName,
        author:tasksFormObj.createdBy
      })
    })
 }

 @action
 deleteTask(task){
    return fetch(`api/DeleteTask/${task.id}`, {
      method: 'delete',
    })
 }

 @action
 updateTask(task){
    return fetch(`api/UpdateTask/${task.id}`,{
      method:'put',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(task)
    });
 }
}
