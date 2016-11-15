import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormControlBase }   from './form-control-base';
import { FormControlText }   from './form-control-text';
import { FormControlSelect } from './form-control-select';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(formControls: FormControlBase<any>[]) {
    let group: any = {};

    formControls.forEach(control => {
        group[control.key] = this.buildFormControl(control);
    });
    return new FormGroup(group);
  }

  buildFormControl(control: FormControlBase<any>) {
    return new FormControl(
      control.value || '',
      control.required ? Validators.required : undefined
    );
  }
}
