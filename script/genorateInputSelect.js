const genorateInputSelect = (formData, jsonData) => {
    const id = formData.get().id;

    const data = jsonData()
    console.log(data.optgroups)
    let listContent = '';

    for (const group of data.optgroups) {
        if (group.label) {
            listContent += `<optgroup label="${group.label}">`
        }
        for (const item of group.options) {
            listContent += `<option value="${item.value}">${item.text}</option>`
        }
        if (group.label) {
            listContent += `</optgroup>`
        }
    }
    return `<select name="${id}-${data.id}" id="${id}-${data.id}">${listContent}</select>`
}

export default genorateInputSelect;