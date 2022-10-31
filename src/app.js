const model = [
    {type: 'title', value: 'Hello from JS'},
    {type: 'text', value: 'Some text'},
    {
        type: 'columns', value: [
            'lorem111111111111110',
            'lorem22222222222220',
            'lorem3333333333333330',
        ]
    },
    { type: 'image', value: './assets/image.jpg'}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    } else if (block.type === 'image') {
        html = image(block)
    }

    $site.insertAdjacentHTML('beforeend', html)
})

function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `
}

function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function columns(block) {
    // let html = ''
    // block.value.forEach(item => {
    //     html += `<div class="col-sm">${item}</div>`
    // })
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
        <div class="row">
            ${html.join('')}    
        </div>
    `
}

function image(block) {
    return `
        <div class="row">
            <img src="${block.value}">
        </div>
    `
}