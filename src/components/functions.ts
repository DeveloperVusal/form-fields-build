import {PROJECT_CLASS_NAMES} from "../__types__/constants.type";
import {Validate} from "../__types__/option.type";
import {ValidateType} from "../__types__/option-field/validate.type";

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

export const eventChange = (event: Event): void => {
    const {target: input} = getTargetAndPreviousElement(event);
    const validateField: Validate = input.getAttribute('data-validate') as Validate;
    input.value = getCorrectStringByValidate(validateField, input.value);
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

export const getCorrectStringByValidate = (field: Validate, value: string = ''): string => {
    switch (field) {
        case ValidateType.phone: {
            let stringWithNumbers: string = value.replace(/\D/ig, '');
            if (!stringWithNumbers) return '';
            return '+' + stringWithNumbers;
        }
        default:
            return value;
    }
}