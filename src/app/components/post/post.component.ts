import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

import { Post } from 'src/app/types'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  @Input() post: Post
  @Input() isSelected: boolean

  @Output() onPostSelected = new EventEmitter<number>()

  selectPost (id: number): void {
    this.onPostSelected.emit(id)
  }
}
