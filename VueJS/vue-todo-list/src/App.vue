<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

export default {
    components: {     //local component
        TodoInput,
        TodoItem,
    },
    data(){
        return{
            tasks: [],
        };
    }, 
    methods: {
        addTask(item){
            this.tasks.push(item);
        },
		removeTask(index){
			this.tasks.splice(index,1);
		},
    }, 
}
</script>
<template>
	<div>
		<TodoInput @abc="addTask"/>
		<!--<h2>Todo List</h2>-->
		<ul>
			<!-- <TodoItem v-for="task in tasks" :xyz="task" /> -->
			<TodoItem v-for="(task,index) in tasks" 
					  v-bind:xyz="task" 
					  @click.native="removeTask(index)" />
		</ul>
	</div>
</template>

<!--
	<div>
		<form>
			<input v-model="task">
			<button>Submit</button>
		</form>
		<ul>
			<li v-for="task in tasks">{{task}}</li>
		</ul>
	</div>
-->