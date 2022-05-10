import {eventFocus, eventBlur, eventChange, getCorrectValue} from './functions'
import {OptionField, Options} from "../__types__/option.type";
import {PROJECT_CLASS_NAMES} from "../__types__/constants.type";


export const init = (options: Options): void => {
    const elementRoot: Element = document.querySelector(options.el) as Element;

    if (!isExistElement(elementRoot)) {
        throw new Error('Element dont exist!');
    }

    if (!isExistRequiredFields(options.fields)) {
        throw new Error('Required fields dont exist!');
    }

    options.fields.forEach(insertHtmlToElementByLoop(elementRoot));
}

const insertHtmlToElementByLoop = (element: Element) => (optionField: OptionField): void => {
    const elementInput = new DOMParser()
        .parseFromString(createInputWithStyle(optionField), "text/html")
        .getElementsByTagName("div")[0];

    addEventListenerForElement(elementInput.lastElementChild!, optionField);
    element.append(elementInput);
}

const addEventListenerForElement = (node: Element, optionField: OptionField): void => {
    node.addEventListener('focus', eventFocus)
    node.addEventListener('blur', eventBlur);
    node.addEventListener('input', eventChange(optionField))
}

const createInputWithStyle = (field: OptionField): string => {
    return (
        `<div class=${PROJECT_CLASS_NAMES.FIELD}>
            <label for="${field.name}" class="${field.value ? PROJECT_CLASS_NAMES.FOCUS : ""}">${field.placeholder ?? ''}</label>
            <input name="${field.name}" 
                   type="${field.type}" 
                   value="${getCorrectValue({field: field.validate}, field.value)}"
                   ${field.required ? 'required' : ''}
            />
        </div>`
    )
}

const isExistElement = (element: Element): boolean => {
    return !!element;
}

const isExistRequiredFields = (fields: Array<OptionField>): boolean => {
    return fields.every(item => item.name && item.type);
}