import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
import {extractMessages} from "@angular/compiler/src/i18n/extractor_merger";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}

    color = 'red';

    onEdit() {
        this.editClicked.emit('A new value!');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}
