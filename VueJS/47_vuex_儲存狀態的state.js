Vuex的store裡面有四個元素:
state: 47_vuex_儲存狀態的state
mutations: 48_vuex_變更狀態的mutations
getters: 49_vuex_取得狀態的getters
actions: 50_vuex_發出指令的actions

- state: 儲存狀態的物件,而該物件會有很多屬性(要取用裡面的屬性，要用computed,而不是用data)

// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {   
        count: 0,
        username: '',
        gender: '',
        favoriteColor: [], 
        // loading: false,   
    },
    mutations: {
        addCount(state){
            state.count += 1;

            Vue.set(state,'loading');
            state.loading = true;  //如果state裡面沒有指定屬性，在此無法運作,除非加上上面那行
        },
    },
});

export default store;

//App.vue :要取用store裡面的屬性，要用computed,而不是用data
<template>
  <div>
    <button @click="addCount"> Add </button>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
export default {
	computed: {
        count(){
            return this.$store.state.count;
        },
        username(){
            return this.$store.state.username;
        },
        favoriteColor(){
            return this.$store.state.favoriteColor;
        },

        //可以使用map語法簡化以上流程
    },
    methods: {
        addCount(){
            this.$store.commit('addCount');
        },
    },
}
</script>

// App.vue: 使用map語法簡化流程
<template>
  <div>
    <button @click="addCount"> Add </button>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';  //加這行

//如果沒有用webpack,就沒有import可以用
// 可以用 Vuex.mapState

export default {
    //1.傳入字串陣列
    computed: mapState([
        'count',
        'username',
        'gender',
        'favoriteColor',
    ]),
    //2.傳入物件
    computed: {
        ...mapState([
            'count',
            'username',
            'gender',
            'favoriteColor',
        ]),
    },
    //以上二擇一

    //3.如果包含state物件裡面的屬性，還要自己的computed?
    data(){
        return {
            localCount: 0,
        }
    },
    computed: mapState({
        //count: 'count',  //前面的count是<h1>裡面的count
        count(state){
            return state.count;
        },  //可改成箭頭函數 count: state => state.count,

        //以下有用到this，則不能轉換成箭頭函數
        totalCount(state){
            return this.localCount + state.count;  //在data宣告localCount
        },
    }),

    // 以上computed改寫成以下:
    computed: {
        myCount(){
            return this.localCount;
        },
        ...mapState([
            'count',
            'username',
            'gender',
            'favoriteColor',
        ]),
    },
    

    methods: {
        addCount(){
            this.$store.commit('addCount');
        },
    },
}
</script>
 

