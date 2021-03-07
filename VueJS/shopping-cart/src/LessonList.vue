<template>
    <div>
        <!-- <div v-for="lesson in lessons">
            <span>{{lesson.title}}</span>
            <img :src="lesson.image">
        </div> -->
        <LessonItem  v-for="lesson in lessons"/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        // lessons(){
        //     return this.$store.state.lessons;
        // },
        ...mapState(['lessons']),
    },
    methods: {
        ...mapActions(['fetchLessons']),
    },
    mounted(){
        // this.$store.dispatch('fetchLessons');   //在此發出一個action
        this.fetchLessons();   //加上map之後就可以這麼寫了(以上要註解)
    },
}
</script>