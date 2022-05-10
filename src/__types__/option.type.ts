import {InputType} from "./option-field/input.type";
import {ValidateType} from "./option-field/validate.type";
import {TemplatePhone} from "./option-field/templates.type";

type ValidateKeyOf = typeof ValidateType[keyof typeof ValidateType];

type TemplatePhoneKeyOf = keyof typeof TemplatePhone;

type ValidateFun = (value: string) => string;

type ValidateField = ValidateKeyOf | null | undefined | ValidateFun | [ValidateKeyOf, TemplatePhoneKeyOf];

export type Validate = { field: ValidateField, template?: TemplatePhoneKeyOf };

export type Input = keyof typeof InputType;

export interface FieldsRequired {
    type: Input,
    name: string
}

export interface OptionField extends FieldsRequired {
    placeholder?: string,
    validate?: ValidateField,
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

