import { FormControlBase }    from './form-control-base';
import { FormControlOptions } from './form-control-options.ts';

export class FormControlText extends FormControlBase<string> {
    type = 'text';

    constructor(options: FormControlOptions = {}) {
        super(options);
    }
}
