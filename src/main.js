// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '.todoapp',
  data () {
    return {
      newTodo: '',
      todos: [{id: 0, title: 'New Todo', completed: 'false'}]
    }
  },
  methods: {
    addTodo () {
      this.todos.push({title: this.newTodo, completed: 'false', id: this.todos.length})
      this.newTodo = ''
    },
    removeTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
})
