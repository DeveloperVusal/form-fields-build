import {eventFocus, eventBlur} from './functions'


import {OptionField, Options} from "../__types__/option.type";
import {PROJECT_CLASS_NAMES} from "../__types__/constants.type";


export const init = (options: Options): void => {
    const elementRoot: Element = document.querySelector(options.el) as Element;
    if (!isExistElement(elementRoot)) {
        throw new Error('Element dont exist!');
    }
    options.fields.forEach(insertHtmlToElementByLoop(elementRoot, 'beforeend'));
    elementRoot.childNodes.forEach(addEventListenerForElement);
}

const insertHtmlToElementByLoop = (element: Element, position: InsertPosition) => (field: OptionField): void => {
    element.insertAdjacentHTML(position, createInputWithStyle(field))
}

const addEventListenerForElement = (node: ChildNode): void => {
    const inputElement = (node as Element).lastElementChild as Element;
    inputElement.addEventListener('focus', eventFocus)
    inputElement.addEventListener('blur', eventBlur);
}

const createInputWithStyle = (field: OptionField): string => {
    return (
        `<div class=${PROJECT_CLASS_NAMES.FIELD}>
            <label for="${field.name}" class="${field.value ? PROJECT_CLASS_NAMES.FOCUS : ""}">${field.placeholder}</label>
            <input name="${field.name}" 
                   type="${field.type}" 
                   value="${field.value ?? ''}"
            />
        </div>`
    )
}

const isExistElement = (element: Element): boolean => {
    return !!element;
}