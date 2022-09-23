

var start2 = Vue.component("start2-page", {
    template: "#start2-page",
    data() {
        return {
            message: "Welcome to the Bookkeeper!",
            
        }
    },



})


var dashboard = Vue.component("dashboard-page", {
    
    template: "#dashboard-page",
    data (){
        return {
            message1: "",
            message2: "",


            items: [
                {name: 'box',price: '20'},
                { name: 'book', price: '10' },
                { name: 'pen', price: '5' }
            ]
        }
    },
    methods: {
        
        add: function () {
            
                var newItem = {
                    name: dashboard.message1,
                    price: dashboard.message2
                };
                dashboard.items.push(newItem);
                
        }
    }

})






var statistics = Vue.component("statistics-page", {
    template: "#statistics-page",
    data() {
        return {
            message: "Statistics page",
        }
    },



})

var history1 = Vue.component("history-page", {
    template: "#history-page",
    data() {
        return {
            message: "History page",
        }
    },



})

var setting = Vue.component("setting-page", {
    template: "#setting-page",
    data() {
        
        return {
            message: "Setting page",
            color: '#CAF3FC',
            
        }
    },



})





const router = new VueRouter({
    routes: [
        { path: '/', component: start2, meta: { index: 0 } },
        { path: '/Dashboard', component: dashboard, meta: { index: 1 } },
        { path: '/Statistics', component: statistics, meta: { index: 2 } },
        { path: '/History1', component: history1, meta: { index: 3 } },
        { path: '/Setting', component: setting, meta: { index: 4 } },



    ]
})


new Vue({
    el: '#color',
    data: { color: '#CAF3FC' }
}) 




new Vue({
    el: '#start2',

    data() {
        return {

        }
    },



    router: router
})

