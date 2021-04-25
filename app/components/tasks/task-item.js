import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TasksTaskItemComponent extends Component {
  @tracked editMode = false;

  @action
  updateEditMode(){
    this.editMode = true
  }

  @action
  updateTask(args){
    this.editMode = false;
    this.args.updateTask(args);
  }

  @action
  resetEditMode(){
    this.editMode=false;
  }

}
