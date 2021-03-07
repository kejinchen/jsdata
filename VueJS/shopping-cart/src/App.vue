<template>
  <div>
    <Cart/>
    <BookList/>
  </div>
</template>

<script>
import Cart from './Cart'
import BookList from './BookList'

export default {
  components: {
    Cart,
    BookList,
  },
}
</script>

<style>
  html.body{
    font-family: Tahoma;
    padding: 0px;
    margin: 0px;
  }
</style>