<template>
  <div>
    <button @click="addCount"> Add </button>
    <h1>{{count}}</h1>
  </div>
</template>

<script>

// 不修改main.js
// import store from './store';

// export default {
// 	computed: {
//         count(){
//             return store.state.count;
//         },
//     },
//     methods: {
//         addCount(){
//             store.commit('addCount');
//         },
//     },
// }

// 修改main.js  -- 處理屬性過多的問題
export default {
	computed: {
        count(){
            return this.$store.state.count;
        },
    },
    methods: {
        addCount(){
            this.$store.commit('addCount');
        },
    },
}

// 修改main.js  -- 處理屬性過多的問題
// import {mapState,mapMutations} from 'vuex';
// export default{
// 	computed: mapState(['count']),
// }
//......
</script>

