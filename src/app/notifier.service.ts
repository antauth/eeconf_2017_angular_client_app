import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';

@Injectable()
export class NotifierService {

    constructor(private socket: Socket) {}

    getMessage(entryId? : number) {
    	let event = 'comment';

    	if(entryId) {
    		event += '_' + entryId;
    	}
    	
        return this.socket
            .fromEvent<any>(event)
            .map(data => data);
    }

}

