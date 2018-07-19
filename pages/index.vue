<template lang="html">
    <div class="">
        <MainApp :callback="scroll"/>
    </div>
</template>

<script>
import MainApp from '../view/index'
import axios from 'axios'
export default {
    data() {
        return {
            page: 20
        }
    },
    components: {
        MainApp
    },
    async asyncData({store, parma}) {
        await axios.get('http://localhost:9000/books')
        .then(res => {
            store.commit('updataBooks', res.data)
        })
        return ""
    },
    methods: {
        scroll() {
            axios.get('http://localhost:9000/books?page='+this.page)
            .then(res => {
                this.page += 20
                this.$store.commit('appendBooks', res.data)
            })
        }
    },
    mounted() {
    }
}
</script>

<style lang="css">

</style>
