import Vue from 'vue'
import App from './App.vue'
import Tag from '../../src/index.js'
import VmInput from 'vue-multiple-input'
import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)
Vue.component(VmInput.name, VmInput)
Vue.component(Tag.name, Tag)

new Vue({
    el: '#app',
    render: h => h(App)
})
