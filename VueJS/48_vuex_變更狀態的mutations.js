Vuex的store裡面有四個元素:
state: 47_vuex_儲存狀態的state
mutations: 48_vuex_變更狀態的mutations
getters: 49_vuex_取得狀態的getters
actions: 50_vuex_發出指令的actions

- mutations: 每一個mutations有兩個組成要素
    1. 名字
    2. callback

mutations是唯一可以直接改變state的方法。
作法: 透過mutations，藉由裡面的callback,將state傳入，就可以直接改變state的屬性值

// store.js
    mutations: {
        addCount(state){
            state.count += 1;

            Vue.set(state, 'loading', false);  //本來state裡面沒有這個屬性
        },
    },

//App.vue: 要commit mutations 要在methods裡面
    methods: {
        addCount(){
            this.$store.commit('addCount');  //commit mutations的名字:addCount
        },
    },
===========

//case study: 在commit時，順便說明要加多少?
//可以在commit時多加一個參數
//App.vue
    this.$store.commit('addCount',5);  //一次加5

// store.js
    mutations: {
        addCount(state, payload){  //commit時附帶一個貨物
            state.count += payload;
        },
    },
===========
// 也可以commit一個物件
//App.vue
    this.$store.commit({
        type: 'addCount',   //只有type名稱是規定，其他的名稱無所謂
        step: 5,
        temp: 100,
    });

// store.js
mutations: {
    addCount(state, payload){  //commit時附帶一個貨物
        state.count += payload.step;  //每次加5
        // state.count += payload.temp;  //每次加100
    },
},
===========
//也有map的語法
//App.vue
<script>
import {mapState, mapMutations} from 'vuex';  //加這行

//跟mapState一樣，可以可以傳入陣列或物件，map的結果也是一個物件
export default {
    computed: mapState(['count']),
    methods: mapMutations(['addCount']),
}
</script>

//mutations的callback只能是同步操作,不可以加上非同步的語法
//非同步的語法只能放在actions

