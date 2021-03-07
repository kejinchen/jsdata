<template>
    <form @submit.prevent="submitData">
		<input v-model="task">
		<button>Submit</button>
	</form>
</template>
<script>
export default {
    data(){
        return {
            task: '',
        };
    },
    methods: {
        submitData(){
            this.$emit('abc',this.task);  // this.$emit('自訂事件名稱'[,.....]);
            this.task = '';
        },
    },
}
</script>