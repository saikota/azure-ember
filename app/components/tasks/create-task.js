import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TasksCreateTaskComponent extends Component {
  @tracked taskName;
  @tracked createdBy;

  @action
  submitForm(e){
    e.preventDefault();
    this.args.createTask({
      taskName: this.taskName,
      createdBy: this.createdBy,
      isComplete: false
    })
  }
  @action
  updateName(e){
    this.taskName = e.target.value;
  }
  @action
  updateCreator(e){
    this.createdBy = e.target.value;
  }
}
