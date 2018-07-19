<template lang="html">
    <div class="container">
        <SearchComponent />
        <slot></slot>
        <footerComponent />
    </div>
</template>

<script>
import SearchComponent from './search'
import footerComponent from './footer'

export default {
    components: {
        footerComponent,
        SearchComponent
    }
}
</script>

<style lang="css" scoped>
    .container {
        padding: 45px 0;
    }
</style>
