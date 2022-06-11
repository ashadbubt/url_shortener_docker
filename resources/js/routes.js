// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import home from './routes/home';

// Vue.use(VueRouter);


// export default new VueRouter({
//     mode: 'history',
//     scrollBehavior: (to, from, savedPosition) => ({ y: 0 }), 
//     routes: [
//         ...home,
//     ],
// });



import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: "/",
        name: "urlshortener",        
            component: () =>
                import ("./components/UrlShortened.vue")
    }]
});


