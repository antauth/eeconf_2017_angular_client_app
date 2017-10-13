import { Component, Input } from '@angular/core';

import { NotifierService } from './notifier.service';

@Component({
  selector: 'new-comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [NotifierService]
})
export class CommentComponent {
	comments: Array<any> = []
  @Input() entryId: any

	constructor(private notifierService: NotifierService) {}

	ngOnInit() {
  		this.notifierService
  			.getMessage(this.entryId)
  			.subscribe(comment => {
  				this.comments.push(comment);
  			});
  }
}
