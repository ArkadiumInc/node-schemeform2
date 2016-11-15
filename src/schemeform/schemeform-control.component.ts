import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormControlBase }  from './form-controls';

@Component({
    selector: 'schemeform-control',
    template: `
    <div [formGroup]="form">
      <div [ngSwitch]="control.type">
        <!-- Text Form Control -->
        <md-input *ngSwitchCase="'text'" [formControlName]="control.key" [id]="control.key" [value]="control.value"
                  [type]="control.type">
            <md-placeholder>{{control.title}}</md-placeholder>
        </md-input>
        <!-- Text Form Control -->
        <!-- Select Form Control -->
        <div class="md-like-select-wrapper" *ngSwitchCase="'select'">
          <label class="md-input-placeholder" [attr.for]="control.key">{{control.title}}</label>
          <select class="md-like-select" [formControlName]="control.key" [id]="control.key">
              <option *ngFor="let opt of control.options" [value]="opt.key"
                      [attr.selected]="control.value == opt.key ? true : null">
                {{opt.value}}
              </option>
          </select>
        </div>
        <!-- Select Form Control -->
      </div>
      <div class="errorMessage" *ngIf="!isValid">{{control.title}} is required</div>
    </div>`,
    style: `
    md-input { width: 100%; }

    .md-like-select-wrapper {
      width: 100%;
      display: inline-block;
      position: relative;
      margin: 16px 0;
      font-family: Roboto, "Helvetica Neue", sans-serif;
    }

    label {
      display: block;
      margin-bottom: -4px;
      transform: translateY(-100%) scale(0.75);
      width: 100%;
      position: absolute;
    }

    .md-like-select {
      height: 30px;
      font: inherit;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, .38);
    }
    `
})
export class DynamicFormControlComponent {
    @Input() control: FormControlBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.control.key].valid;
    }
}
