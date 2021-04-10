import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend( {

  @action
    createTask(tasksFormObj){

    return fetch('/tasks', {
      method: 'post',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        name:tasksFormObj.taskName,
        author:tasksFormObj.createdBy
      })
    })
 }
});
