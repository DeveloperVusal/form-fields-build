/**
 * 
 * @param {*} options 
 */
export const init = (options) => {
    let fields = ''

    for (let item of options.fields) {
        fields += `
            <div class="ffpformbuild__field">
                <label for="${item.name}">${item.label}</label>
                <input id="${item.name}" type="${item.type}" name="${item.name}" value="${(item.value) ? item.value : ''}" />
            </div>
        `
    }

    const html = `
        <div class="ffpformbuild">
            ${fields}
        </div>
    `

    document.querySelector(options.el).innerHTML = html
}