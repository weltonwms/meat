import { Component, OnInit, AfterContentInit, Input,
   ContentChild,  ElementRef} from '@angular/core';
import{FormControlName} from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label:string;
  @Input() errorMessage:string;
  @Input() showTip:boolean=true;

  @ContentChild(FormControlName) formControlName:FormControlName;
 
  input:any;
  inputId:string;

  constructor(private elt:ElementRef) { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input= this.formControlName;
    this.inputId=this.elt.nativeElement.querySelector('input').id || '';
  }

  debugar(){
    console.log(this.input.valid)
  }

  hasError(){
    return !this.input.valid && this.input.dirty;
  }

  hasSuccess(){
    return this.input.valid && this.input.dirty;
  }

}
