import { FormControlBase }    from './form-control-base';
import { FormControlOptions } from './form-control-options.ts';

export class FormControlSelect extends FormControlBase<string> {
  type = 'select';

  constructor(options: FormControlOptions = {}) {
    super(options);
  }
}
