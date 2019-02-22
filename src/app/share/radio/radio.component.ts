import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import { RadioOption } from './radio-option.model';


@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>RadioComponent),
      multi:true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  value:any;
  onChange:any;

  @Input() options:Array<RadioOption>;

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value= value;
    this.onChange(this.value);
  }

  writeValue(value:any){
    this.value= value;
    
  }

  registerOnChange(fn){
    this.onChange=fn;
    
  }
  registerOnTouched(){
   
  }

}
