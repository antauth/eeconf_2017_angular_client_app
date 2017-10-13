import { Component } from '@angular/core';

import { NotifierService } from './notifier.service';

@Component({
  selector: 'notifications',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.css'],
  providers: [NotifierService]
})
export class NotificationBadgeComponent {
	comment: any

	constructor(private notifierService: NotifierService) {
    this.comment = {
      comment: 'no new comments',
      url: ''
    };
  }

	ngOnInit() {
  		this.notifierService
  			.getMessage()
  			.subscribe(comment => {
  				this.comment = comment;
  			});
  }
}
