import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

import { User } from '../../types'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  @Input() user: User
  @Input() isSelected: boolean

  @Output() onUserSelected = new EventEmitter<number>()

  selectUser (id: number): void {
    this.onUserSelected.emit(id)
  }
}
