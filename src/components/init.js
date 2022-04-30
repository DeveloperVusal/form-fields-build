import { formInputFocus, formInputBlur } from './functions'

/**
 * 
 * @param {*} options 
 */
export const init = (options) => {
    let fields = ''

    // Генерируем поля
    for (let item of options.fields) {
        fields += `
            <div class="ffpformbuild__field${(item.value) ? ' ffpformbuild__field--focused' : ''}">
                <label for="${item.name}">${item.label}</label>
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
    document.querySelector(options.el).innerHTML = html

    // Получаем созданные поля
    const list_inputs = document.querySelectorAll(`${options.el} .ffpformbuild__field`)

    // Оживляем поля при нажатии
    for (let item of list_inputs) {
        item.addEventListener('click', (e) => {
            formInputFocus(e)
        })

        item.querySelector('input').addEventListener('blur', (e) => {
            formInputBlur(e)
        })
    }
}