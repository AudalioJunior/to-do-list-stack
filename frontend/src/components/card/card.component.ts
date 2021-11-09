import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public formGroup!: FormGroup;

  @Input() 
  title: string = '';

  @Input() 
  content: string = '';

  @Input() 
  checked: any;

  @Input()
  isEdit: boolean = Boolean();

  @Input()
  id: string = '';

  @Output()
  clickAddEmitter = new EventEmitter();

  @Output()
  clickDeleteEmitter = new EventEmitter();

  @Output()
  changeCheckEmitter = new EventEmitter();

  @Output()
  deleteEmitter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
    ) { }

  async ngOnInit() {
    await this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  clickAdd(){
    const values = this.formGroup?.value;
    this.clickAddEmitter.emit(values);
  }

  clickDelete(){
    this.clickDeleteEmitter.emit(this.id);
  }

  changeChecked(){
    let values = Object();
    values._id = this.id;
    values.select = !this.checked;
    this.changeCheckEmitter.emit(values);
  }

  clickDeleteAll(){
    this.deleteEmitter.emit();
  }
}
