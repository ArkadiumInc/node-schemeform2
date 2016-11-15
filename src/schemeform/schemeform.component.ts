import { Component
       , Input
       , Output
       , OnChanges
       , EventEmitter } from '@angular/core';
import { FormGroup }    from '@angular/forms';

import { FormControlService } from './form-controls';
import { FormControlBase }    from './form-controls';

@Component({
    selector: 'schemeform',
    template: `
    <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <!-- Dynamically Created Form Controls -->
        <div *ngFor="let control of controls" class="form-row">
            <df-control [control]="control" [form]="form"></df-control>
        </div>
        <!-- Dynamically Created Form Controls -->
        <div class="form-row">
            <button md-raised-button type="submit" [disabled]="!form.valid">Save</button>
            <button md-raised-button type="button" (click)="onClose()">Close</button>
        </div>
      </form>
    </div>`,
    providers: [ FormControlService ]
})
export class SchemeFormComponent implements OnChanges {
    form: FormGroup;
    @Input()  controls: FormControlBase<any>[] = [];
    @Output() submit:   EventEmitter<any>      = new EventEmitter();
    @Output() close:    EventEmitter<any>      = new EventEmitter();

    constructor(private fcs: FormControlService) { }

    ngOnChanges() {
        this.form = this.fcs.toFormGroup(this.controls);
    }

    onClose() {
        this.close.emit();
    }

    onSubmit() {
        this.submit.emit(this.form.value);
    }
}
