<template lang="html">
    <Content>
        <h1>{{title}}</h1>
        <div class="article">
            {{article}}
        </div>
    </Content>

</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'
import Content from '../../components/content'

export default {
    data() {
        return {
            article: '',
            url: ''
        }
    },
    async asyncData(context) {
        const id = context.route.params.id
        let article = ''
        let img = ''
        let title = ''
        await axios.get(`http://www.gushi365.com/info/${id}.html`)
        .then(res => {
            const $ = cheerio.load(res.data)
            article = $('.single-content').text()
            title = $('.single-content h2').text()
        })
        return {
            article: article,
            url: img,
            title: title
        }
    },
    components:{
        Content
    },
    mounted() {
    }
}
</script>

<style lang="css" scoped>
    .article {
        padding: 10px;
        box-sizing: border-box;
        word-break: break-all;
        white-space: pre-wrap;
    }
    h1 {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
    }
</style>
