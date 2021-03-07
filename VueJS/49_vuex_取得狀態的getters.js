Vuex的store裡面有四個元素:
state: 47_vuex_儲存狀態的state
mutations: 48_vuex_變更狀態的mutations
getters: 49_vuex_取得狀態的getters
actions: 50_vuex_發出指令的actions

- getters: 就是store裡面的computed

// store.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {   
        tasks: [],
    },
    mutations: {
        
    },
    getters:{

    },
});
export default store;

//case study: 陣列tasks中，有哪些做完?那些沒有做?

//App.vue
<script>
import {mapState} from 'vuex';  
export default {
	computed: {
        ...mapState(['tasks']),
        taskNotDone(){
            return this.tasks.filter(task => !task.done).length;
            //如果只有App.vue要使用，寫在這裡就好了
            //但如果很多組件要使用，就要寫在store.js的getters裡面
        },
    },
}
</script>
==========

// store.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {   
        tasks: [],
    },
    mutations: {
        
    },
    getters:{
        taskNotDone(state){
            // return this.tasks.filter(task => !task.done).length; 改寫成以下
            return state.tasks.filter(task => !task.done).length;
        },
    },
});
export default store;

//App.vue
<script>
import {mapState, mapGetters} from 'vuex';  
export default {
	computed: {
        ...mapState(['tasks']),
        ...mapGetters(['taskNotDone']),
    },
}
</script>
==========
//在getters裡面，有一個getter要用到其他的getter
// store.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {   
        tasks: [],
    },
    mutations: {
        
    },
    getters:{
        taskNotDone(state){
            // return this.tasks.filter(task => !task.done).length; 改寫成以下
            return state.tasks.filter(task => !task.done).length;
        },
        //getter taskDone要用到getter taskNotDone怎麼辦?
        taskDone(state,getters){
            return state.tasks.length - getters.taskNotDone;
        },

        //也可以回傳函數
        taskWithID(state){
            return (id) => {
                return state.tasks.filter(task => task.id === id)
            };
        },
        //接下來到App.vue去呼叫

        //taskWithID也可以這麼寫
        taskWithID(state){
            return (id) => state.tasks.filter(task => task.id === id)
        },
        //也可以這麼寫
        taskWithID: state => return (id) => state.tasks.filter(task => task.id === id),
    },
});
export default store;

//App.vue
<script>
import {mapState, mapGetters} from 'vuex';  
export default {
	computed: {
        ...mapState(['tasks']),
        ...mapGetters(['taskNotDone']),
    },
    methods: {
        test(){
            this.taskWithID(10);
        }
    },
}
</script>

