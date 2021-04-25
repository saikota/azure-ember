import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action} from '@ember/object';

export default class TasksEditTaskComponent extends Component {

  @tracked taskName;

  @action
  updateTask(){
    this.args.saveTask({
      id: this.args.task.id,
      name: this.taskName,
      isComplete: this.args.task.isComplete,
      author: this.args.task.author,
    })
  }

  @action
  updateTaskName(e){
    this.taskName = e.target.value;
  }
}
