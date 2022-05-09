import {InputType} from "./option-field/input.type";
import {ValidateType} from "./option-field/validate.type";


export type Validate = keyof typeof ValidateType | null | undefined;
export type Input = keyof typeof InputType;

export interface FieldsRequired {
    type: Input,
    name: string
}

export interface OptionField extends FieldsRequired {
    placeholder?: string,
    validate?: Validate,
    className?: string,
    value?: string,
    required?: boolean
}

export interface Options {
    el: string,
    fields: Array<OptionField>,
    url?: string,
    method?: string
}

