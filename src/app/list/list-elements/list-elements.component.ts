import { Component, AfterViewInit} from '@angular/core';
import { ChecklistValues } from './checklist-values';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent {
  subheading: string = '';
  checklistValues: ChecklistValues[] = [];

  newTask() {
    this.checklistValues.push({ isChecked: false, value: '' });
    setTimeout(() => {
        document.getElementById(`textbox${this.checklistValues.length - 1}`)?.focus();}, 0);
  }

  deleteTask(item: ChecklistValues){
    const index = this.checklistValues.indexOf(item);
    this.checklistValues.splice(index, 1);
  }
}