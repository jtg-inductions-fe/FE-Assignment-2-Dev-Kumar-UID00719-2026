import { Component, inject, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl } from '@angular/forms';

import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
    selector: 'app-input-chip',
    templateUrl: './input-chip.component.html',
    styleUrls: ['./input-chip.component.scss'],
})
export class InputChipComponent {
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    announcer = inject(LiveAnnouncer);

    @Input({ required: true }) control!: FormControl<string[]>;
    @Input() label = '';
    @Input() placeholder = '';

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        if (value) {
            const data = [...(this.control.value ?? [])];
            data.push(value);
            this.control.setValue(data);
        }

        event.chipInput!.clear();
    }

    remove(item: string): void {
        const data = [...(this.control.value ?? [])];
        const index = data.indexOf(item);

        if (index >= 0) {
            data.splice(index, 1);
            this.control.setValue(data);
        }
    }

    edit(item: string, event: MatChipEditedEvent) {
        const data = [...(this.control.value ?? [])];
        const value = event.value.trim();

        if (!value) {
            this.remove(item);
            return;
        }

        const index = data.indexOf(item);
        if (index >= 0) {
            data[index] = value;
            this.control.setValue(data);
        }
    }
}
