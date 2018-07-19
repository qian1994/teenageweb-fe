<template lang="html">
    <div class="">
        <Content>
            <div class="Item-card-content">
                <div v-for="item in $store.state.books">
                    <ItemCard :item="item" />
                </div>
            </div>
        </Content>
    </div>
</template>

<script>
import Content from '../components/content'
import ItemCard from '../components/ItemCard'
export default {
    data() {
        return {
            data:"",
        }
    },
    props: {
        callback: null
    },
    methods:{
        scroll(e) {
            const self = this;
            const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.clientHeight;
            const tH = document.body.clientHeight;
            if (top + height + 10 >= tH) {
                typeof this.callback == 'function' ? this.callback() : ''
            }
        }
    },
    mounted() {
        window && window.addEventListener('scroll', (e) => {
            this.scroll(e);
        })
    },
    components:{
        Content,
        ItemCard
    }
}
</script>

<style lang="css" scoped>
    .Item-card-content::after {
        content: "";
        display: block;
        clear: both;
    }
</style>
