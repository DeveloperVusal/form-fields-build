import {formInputFocus, formInputBlur} from './functions'


import {Options} from "../__types__/option.type";

export const init = (options: Options) => {
    let fields = ''
    // Генерируем поля
    for (let item of options.fields) {
        fields += `
            <div class="ffpformbuild__field${(item.value) ? ' ffpformbuild__field--focused' : ''}">
                <label for="${item.name}">${item.placeholder}</label>
                <input id="${item.name}" type="${item.type}" name="${item.name}" value="${(item.value) ? item.value : ''}" />
            </div>
        `
    }

    // Генерируем форму
    const html = `
        <div class="ffpformbuild">
            ${fields}
        </div>
    `
    // Рисуем на экране готовую форму
    document.querySelector(options.el as any).innerHTML = html

    // Получаем созданные поля
    const list_inputs: any = document.querySelectorAll(`${options.el} .ffpformbuild__field`)

    // Оживляем поля при нажатии
    for (let item of list_inputs) {
        item.addEventListener('click', (e: any) => {
            formInputFocus(e)
        })

        item.querySelector('input').addEventListener('blur', (e: any) => {
            formInputBlur(e)
        })
    }
}