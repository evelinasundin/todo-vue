// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './main.css'
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

const STORAGE_KEY = 'todo-storage'

new Vue({
  el: '.todoapp',
  data () {
    return {
      newTodo: '',
      todos: [],
      editedTodo: null
    }
  },
  // vue js life cycle hook, method thats initiated everytime vue is booted up
  created () {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  methods: {
    addTodo () {
      this.todos.push({title: this.newTodo, completed: 'false', id: this.todos.length})
      this.newTodo = ''
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    removeTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    editTodo (todo) {
      this.editedTodo = todo
    },
    doneEdit (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    }
  }
})
