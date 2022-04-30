/**
 * 
 * @param {*} options 
 */
export const init = (options) => {
    let html = ''

    for (let item of options.fields) {
        html += `
            <div style="display:block;">
                <label for="${item.name}">${item.label}</label>
                <input id="${item.name}" type="${item.type}" name="${item.name}" value="${(item.value) ? item.value : ''}" />
            </div>
        `
    }

    document.querySelector(options.el).innerHTML = html
}