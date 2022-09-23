var login = Vue.component("login-form", {
    template: "#login-form",

    data() {
        return {
        }
    },
    methods: {
        clickjump() {
            this.timer = setInterval(() => {

                window.location = 'Index.html';

            }, 2000)
            alert("You have successfully login!\nYou will be redirected to the Bookkeeper page.");
        },
     

    }


})

var signup = Vue.component("signup-form", {
    template: "#signup-form",

    data() {
        return {
        };
    },
    methods: {
        clickjump() {
            this.timer = setInterval(() => {

                this.$router.push({ path: '/Login' });

            }, 2000)
            alert("You have successfully signed up!\nYou will be redirected to the login page.");
        },



    }


})



const router = new VueRouter({
    routes: [
        { path: '/', component: start1, meta: { index: 0 } },
        { path: '/Signup', component: signup, meta: { index: 1 } },
        { path: '/Login', component: login, meta: { index: 2 } },

    ]
})










new Vue({
    el: '#start1',
    




    router: router
})

