<template lang="html">
    <div class="">
        <header>
            <input type="text" name="" v-model="word">
            <span class="search-btn-img" v-if="!word"></span>
            <span class="search-btn-word" v-if="!word">搜索</span>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return{
            word: ''
        }
    },
    methods:{
    }
}
</script>

<style lang="css" >
    header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        /* background: rgb(246, 246, 246); */
        background: #0588ff;
        padding-top: 7px;
        box-sizing: border-box;
        color: white
    }
    header input {
        width: 90%;
        display: block;
        height: 28px;
        margin: 0 auto;
        background: rgba(231, 221, 221, 0.5);
        border-radius: 4px;
        border: none;
        outline: none;
        color: white;
    }
    .search-btn-img {
        position: absolute;
        display: inline-block;
        left: 50%;
        top: 50%;
        width: 16px;
        background: url('../assets/search.png');
        background-size: 100% 100%;
        height: 16px;
        transform: translate(-50%, -50%);
        margin-left: -10px;
    }
    .search-btn-word {
        position: absolute;
        display: inline-block;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin-left: 20px;
        font-size: 14px;
    }
</style>
