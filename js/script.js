const { createApp } = Vue

createApp({
    data() {
      return {
        newTask: '',
        error: false,
        tasks : [
            { text: 'Fare i compiti', done: false }, 
            { text: 'Fare la spesa', done: true }, 
            { text: 'Fare il bucato', done: false },
        ],
      }
    },
    methods: {
        addTask: function(event){
            if(this.newTask.length === 0){    
                this.error = true;
            }
            else{
                this.error = false;            
                this.tasks.push({ text: this.newTask, done: false});
                this.newTask = '';
            }
            event.preventDefault();
        },
        checkTask: function(i){
            this.tasks[i].done=!this.tasks[i].done;
        },
        delTask: function(i){
            this.tasks.splice(i, 1);
        }
    }
}).mount('#app')