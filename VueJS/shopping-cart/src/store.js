import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

const BOOK_URL = 'bookData.json';
const store = new Vuex.Store({  
    state: {   
        books: [],                //1. 建空陣列
        carts: [],
    },
    getters: {
        bookInCart: state => (state.carts.length),
        priceInCart: state => (
            state.carts.reduce((accmulator,book) => (accmulator + book.price), 0)
        ),
        isInCart: state => book => (
            state.carts.findIndex(({id}) => id == book.id )!= -1
        ),
    },
    mutations: {                    //2. 用ajax讀資料進來
        setBooks(state, books){
            state.books = books;
        },
        addCart(state, book){
            state.carts.push(book);
        },
    },              
    actions: {                      //3. fetch資料
        fetchBooks({commit}){     //參考26_ES6.html 第三點解構賦值
            fetch(BOOK_URL)
                .then(res => res.json())
                .then(res => {
                    //const books = res;   //取得response回來的陣列
                    //commit('setBooks', books);
                    commit('setBooks', res);  //commit從哪裡來的?是actions裡面function的參數
                });
        },
    },
});

export default store;