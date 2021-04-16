import Route from '@ember/routing/route';

export default class TasksRoute extends Route {

  model(){
    return fetch('/api/tasks').then( function(response){
     if(response.status !== 200){
      return
     }
      return response.json();
    })
  }
}
