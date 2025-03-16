import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    this.add.emit({ title: title, text: ticketText });

    form.reset();
  }
}
