import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, animate, style} from '@angular/animations';
import {NotificationService} from '../notification.service';
//import 'rxjs/add/operator/do'; //Não existe no angular 7
import {switchMap, tap} from 'rxjs/operators';
import {timer} from 'rxjs';


@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snackAnimation',[
      state('visible', style({opacity:1, bottom:'40px'})),
      state('hidden', style({opacity:0, bottom:0})),
      transition("hidden => visible", animate('500ms 0s ease-in')),
      transition("visible => hidden", animate("500ms 0s ease-out"))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  msgState='hidden';
  message:string;

  constructor(public ns:NotificationService) { }

  ngOnInit() {
    this.ns.notifier
    .pipe(
      tap(msg=>{
        this.message=msg;
        this.msgState='visible';
      }),
      switchMap(msg=>{
        //console.log('switchMap',msg);
        return timer(3000)
      })
      
    ).subscribe(timer=>{
      this.msgState='hidden';
    });
  }

  toggleVisibility(){
    this.msgState= this.msgState=='visible'?'hidden':'visible';
  }

}
