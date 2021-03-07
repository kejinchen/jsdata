<template>
    <li class="theItem">{{xyz}}</li>
</template>

<script>
export default {
    props: ['xyz'],
}
</script>

<style>
    .theItem{
        cursor: pointer;
        font: 18px Calibri;
        background: #abc;
        margin: 5px 0px;
        padding: 5px;
    }
    .theItem:hover{
        background: #cba;
    }
</style>
 