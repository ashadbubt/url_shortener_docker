const home = () =>import ( '../components/app.vue')
const urlshortener = () =>import ( '../components/UrlShortened.vue')

export default [ 
    {
        path: '/home',
        component: home,
        name: 'home',
    },
    {
        path: '/',
        component: urlshortener,
        name: 'urlshortener',
    }
]

