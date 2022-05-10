import {PROJECT_CLASS_NAMES} from "../__types__/constants.type";
import {OptionField, Validate} from "../__types__/option.type";
import {ValidateType} from "../__types__/option-field/validate.type";
import {TemplatePhone} from "../__types__/option-field/templates.type";

interface TargetAndPreviousElement {
    target: HTMLInputElement,
    label: Element
}

// При включении фокуса
export const eventFocus = (event: Event): void => {
    const {label} = getTargetAndPreviousElement(event);
    addClassName(label);
}

// При отключении фокуса
export const eventBlur = (event: Event): void => {
    const {target, label} = getTargetAndPreviousElement(event);
    deleteClassByValue(target.value, label);
}

export const eventChange = (optionField: OptionField) => (event: Event): void => {
    const {target: input} = getTargetAndPreviousElement(event);
    input.value = getCorrectValue({field: optionField.validate}, input.value);
}

const addClassName = (label: Element): void => {
    label.classList.add(PROJECT_CLASS_NAMES.FOCUS);
}

const deleteClassByValue = (value: string | undefined, label: Element): void => {
    !value && label.classList.remove(PROJECT_CLASS_NAMES.FOCUS);
}

const getTargetAndPreviousElement = (event: Event): TargetAndPreviousElement => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const label: Element = target.previousElementSibling as Element;
    return {target, label}
}

export const getCorrectValue = (validate: Validate, value: string = ''): string => {
    if (typeof validate.field === 'function') {
        try {
            return validate.field(value);
        } catch (err) {
            const error = err as { message: string };
            console.log(error.message)
        }
    }

    if (Array.isArray(validate.field)) {
        const [field, template] = validate.field;
        if (field === 'phone' && TemplatePhone[template]) {
            return changeValueByValidation({field, template}, value)
        }
        return changeValueByValidation(validate, value)
    }

    return changeValueByValidation(validate, value);
}
export const changeValueByValidation = (validate: Validate, value: string): any => {
    switch (validate.field) {
        case ValidateType.PHONE: {
            let stringWithNumbers: string = value.replace(/\D/ig, '');
            if (!stringWithNumbers) return '';
            return '+' + stringWithNumbers;
        }
        case ValidateType.EMAIL: {
            return value;
        }
        default:
            return value;
    }
}
