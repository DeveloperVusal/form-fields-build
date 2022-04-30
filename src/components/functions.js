
// При включении фокуса
export const formInputFocus = (event) => {
    const elem = event.target
    const tag_name = elem.tagName.toLowerCase()
    let input = null

    if (tag_name === 'label' || tag_name === 'div') {
        if (tag_name === 'label') {
            input = elem
        } else {
            input = elem.childNodes[3]
        }
        
        input.parentNode.classList.add('ffpformbuild__field--focused')
        input.focus()
    }
}

// При отключении фокуса
export const formInputBlur = (event) => {
    const elem = event.target
    const items = elem.parentNode.parentNode.querySelectorAll('.ffpformbuild__field')

    // Отключаем фокус всех полей
    for (let i = 0; i < items.length; i++) {
        // Если поле не заполнено, то отключаем фокус
        if (!items[i].querySelector('input').value.length) {
            items[i].classList.remove('ffpformbuild__field--focused')
        }
    }
}