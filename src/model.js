import image from './assets/image.jpg'

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов на чистом JavaScript',
        options: {
            tag: 'h2',
            // styles: `background: linear-gradient(to right, #ff0099, #493240);color: #fff;text-align: center;padding: 1.5rem`
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    },
    {
        type: 'text',
        value: 'Этот текст очень важен, поэтому он здесь',
        options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'image',
        value: image,
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center',
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Website picture'
        }
    },
    {
        type: 'columns',
        value: [
            'Приложение на чистом JavaScript',
            'Свой конструктор сайтов',
            'Это очень крутой конструктор',
        ],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    }
]