import {OptionField} from "../__types__/option.type";
import {PROJECT_CLASS_NAMES} from "../__types__/constants.type";

interface TargetAndPreviousElement {
    target: Element,
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
    deleteClassByValue((target as Pick<OptionField, 'value'>).value, label);
}

export const eventChange = (event: Event): void => {
    const {target} = getTargetAndPreviousElement(event)
    const input: Pick<OptionField, 'value'> = (target as Pick<OptionField, 'value'>)
    const tagName: string = target.getAttribute('name') ?? ''

    input.value = formatField(tagName, input.value ?? '')
}

const addClassName = (label: Element): void => {
    label.classList.add(PROJECT_CLASS_NAMES.FOCUS);
}

const deleteClassByValue = (value: string | undefined, label: Element): void => {
    !value && label.classList.remove(PROJECT_CLASS_NAMES.FOCUS);
}

const getTargetAndPreviousElement = (event: Event): TargetAndPreviousElement => {
    const target: Element = event.target as Element;
    const label: Element = target.previousElementSibling as Element;
    return {target, label}
}

export const formatField = (field: string, value: string): string => {
    let result:string

    switch (field) {
        case 'phone':
            let newstr:string = value.replace(/[^\d]/ig, '')

            newstr = '+' + newstr
            result = newstr

            break;
        default:
            result = value

            break;
    }

    return result ?? value
}