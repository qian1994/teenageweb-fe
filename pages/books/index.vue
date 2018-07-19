<template lang="html">
    <div class="">
        <MainApp />
    </div>
</template>

<script>
import MainApp from '../../view/index'
import axios from 'axios'
export default {
    components: {
        MainApp
    },
    async asyncData({store, parma}) {
        await axios.get('http://localhost:9000/books')
        .then(res => {
            store.commit('updataBooks', res.data)
        })
        return ""
    }
}
</script>
<style lang="css">

</style>
