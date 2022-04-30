/**
 * 
 * @param {*} options 
 */
export const init = (options) => {
    let fields = ''

    for (let item of options.fields) {
        fields += `
            <div style="display: block;">
                <label for="${item.name}">${item.label}</label>
                <input id="${item.name}" type="${item.type}" name="${item.name}" value="${(item.value) ? item.value : ''}" />
            </div>
        `
    }

    const html = `
        <div style="margin: 4rem auto; width: 25%">
            ${fields}
        </div>
    `

    document.querySelector(options.el).innerHTML = html
}