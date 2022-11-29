const { createApp } = Vue

createApp({
    data() {
      return {
        newTask: '',
        tasks : [
            { text: 'Fare i compiti', done: false }, 
            { text: 'Fare la spesa', done: true }, 
            { text: 'Fare il bucato', done: false },
        ],
      }
    },
    methods: {
        addTask: function(event){
            event.preventDefault();
            this.tasks.push({ text: this.newTask, done: false});
            this.newTask = '';
        },
    }
}).mount('#app')