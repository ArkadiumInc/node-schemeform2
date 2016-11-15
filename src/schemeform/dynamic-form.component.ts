import { Component
       , Input
       , Output
       , OnChanges
       , EventEmitter } from '@angular/core';
import { FormGroup }    from '@angular/forms';

import { FormControlService } from './form-control.service';
import { FormControlBase }    from './form-controls/form-control-base';

@Component({
    selector: 'dynamic-form',
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
    </div>
    `,
    providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnChanges {
    form: FormGroup;
    @Input()  controls: FormControlBase<any>[] = [];
    @Output() submit:   EventEmitter<any>      = new EventEmitter();
    @Output() close:    EventEmitter<any>      = new EventEmitter();

    constructor(private fcs: FormControlService) { }

    ngOnChanges() {
        this.form = this.fcs.toFormGroup(this.formControls);
    }

    onClose() {
        this.dynamicFormClose.emit();
    }

    onSubmit() {
        this.dynamicFormSubmit.emit(this.form.value);
    }
}
