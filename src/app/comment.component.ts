import { Component } from '@angular/core';

import { NotifierService } from './notifier.service';

@Component({
  selector: 'new-comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [NotifierService]
})
export class CommentComponent {
	comments: Array<any> = []
  entryId: any

	constructor(private notifierService: NotifierService) {}

	ngOnInit() {
  		this.notifierService
  			.getMessage(11)
  			.subscribe(comment => {
  				this.comments.push(comment);
  			});
  }
}
