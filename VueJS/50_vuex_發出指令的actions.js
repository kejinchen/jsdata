Vuex的store裡面有四個元素:
state: 47_vuex_儲存狀態的state
mutations: 48_vuex_變更狀態的mutations
getters: 49_vuex_取得狀態的getters
actions: 50_vuex_發出指令的actions

- actions: 可以處理非同步操作

//case study: 要用ajax從API取得server的資料，存入陣列tasks

// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);
const url = '';  //路徑內容自己寫
const store = new Vuex.Store({ 
    state: {   
        tasks: [],    
    },
    mutations: {
        setTasks(state,tasks){
            state.tasks = tasks;  //在此才能改變state的tasks
            //接下來要像辦法讓actions發出mutations
        },
    },
    actions: {
        //語法
        // fetchTasks(){
        //     fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {...});
        // },

        //從url取回的json,將tasks指定(assign)回去給state的tasks
        //請注意: actions不能直接修改state,只能commit mutations

        fetchTasks(store){  //此處store並非之前的那個store，但從意義來看很類似
            fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
                store.commit('setTasks',tasks);
            });
        },
    },
});

export default store;

//App.vue
<script>
import {mapState, mapGetters} from 'vuex'; 
export default {
	mounted(){
        //在mounted裡面去actions 執行　fetchTasks
        this.$store.dispatch('fetchTasks');

        //mutations對應的是commit
        //actions對應的是dispatch
        //兩者用法幾乎一樣
    },
}
</script>

==========

接下來修改store.js裡面的fetchTasks

fetchTasks(store){  //此處store並非之前的那個store，但從意義來看很類似
    fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
        store.commit('setTasks',tasks);
    });
},

↓↓↓↓↓↓↓↓↓修改成以下
//應該要使用context，因為context包含store裡面的一切: mutations, commit, dispatch, state...

fetchTasks(context){
    fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
        context.commit('setTasks',tasks);
    });
},

↓↓↓↓↓↓↓↓↓再修改成以下
fetchTasks({commit}){
    fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
        commit('setTasks',tasks);
    });
},

// case study: 在同一個actions做不同的commit?
// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);
const url = '';  //路徑內容自己寫
const store = new Vuex.Store({ 
    state: {   
        tasks: [], 
        loading: false, //加這行   
    },
    mutations: {
        setTasks(state,tasks){
            state.tasks = tasks;  //在此才能改變state的tasks
            //接下來要像辦法讓actions發出mutations
        },
        setLoading(state,loading){
            state.loading = loading;
        },
    },
    actions: {
        fetchTasks({commit},payload){ 
            
            commit('setLoading',true);
            
            fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
                commit('setTasks',tasks);
                commit('setLoading',false);
            });
        },
    },
});
export default store;

//App.vue

import {mapActions} from 'vuex';
export default{
    mounted(){
        this.fetchTasks({id:5});
    },
    methods: mapActions(['mapActions']),
}