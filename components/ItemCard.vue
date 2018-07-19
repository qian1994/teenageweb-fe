<template lang="html">
    <div class="box">
        <a :href="bookId">
            <img :src="url" alt="">
            <p class="word">{{item.name}}</p>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props:{
        item: null,
    },
    computed:{
        url(){
            return !!this.item.cover && this.item.cover !== 'null' ? this.item.cover : 'http://img.gushi365.com/img/xiaogou-liukoushui.jpg'
        },
        bookId() {
            const url = this.item.contentUrl.match(/\d+/g)
            return `/books/${url}`
        }
    },
    mounted() {

    }
}
</script>

<style lang="css" scoped>
    a {
        text-decoration:none;
        color: white;

    }
    img {
        width: 113px;
        height: 106px;
    }
    .box {
        width: 30%;
        margin-left: 1.55%;
        margin-right: 1.55%;
        margin-bottom: 14px;
        height: 133px;
        float: left;
        text-align: center;
        cursor: pointer;
        background: rgba(5, 136, 255, 0.3);
        color: white;
    }
    .box .img {
        width: 100%;
        height: 80%;
        cursor: pointer;
    }

    .box .word {
        font-size: 14px;
        margin-top: 3px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        cursor: pointer;

    }
</style>
