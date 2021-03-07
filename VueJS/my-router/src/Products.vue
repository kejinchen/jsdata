<template>
    <div>
        <h1>Products</h1>
        <!-- <h3>{{$route.params.sn}}</h3> -->
        <h3>{{sn}}</h3>
    </div>
</template>

<script>
const products = {
    1: 'Hats',
    10: 'T-Shirts',
    15: 'Shoes',
    20: 'Mac Pro',
    25: 'iPad Air',
};

export default {
    computed: {
        sn(){
            // return this.$route.params.sn;

            return products[this.$route.params.sn];
            //http://localhost:8080/products/10

            // return products[this.$route.query.sn];
            // http://localhost:8080/products?sn=10
        },
    },
}
</script>

<style scoped>
    h1{
        font: 40px Tahoma;
        color: green;
    }
</style>