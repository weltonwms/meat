import {EventEmitter} from '@angular/core';

export class NotificationService{
    notifier:EventEmitter<string>= new EventEmitter();
    
    constructor(){}

    notify(msg:string){
        this.notifier.emit(msg);
    }
}