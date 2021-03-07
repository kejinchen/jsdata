import Vue from 'vue';
// import Vuex, {Store} from 'vuex';  //第一種寫法
import Vuex from 'vuex';  //第二種寫法

Vue.use(Vuex);

//第一種寫法
// const store = new Store({  //global store
//     state: {   
//         count: 0,
//         x: 100,
//         y: 'ABC',
//         z: false,
//     },
//     mutations: {
//         addCount(state){
//             state.count += 1;
//         },
//     },
// });

//第二種寫法
const store = new Vuex.Store({  //差別在這行
    state: {   
        count: 0,    
    },
    mutations: {
        addCount(state){
            state.count += 1;
        },
    },
});

export default store;