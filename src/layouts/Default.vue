<template lang="pug">
    .default_background
        .layout
            .top
                topbar
            .body
                sidebar
                .page(v-if='$auth.ready()')
                    router-view
</template>

<script>
  import Topbar from "../components/Topbar";
  import Sidebar from "../components/Sidebar";

  export default {
    name: 'default',
    components: {Sidebar, Topbar}
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    .default_background {
        background-color: $background;
        width: 100%;
        height: 100vh;

        .layout {
            > .body {
                display: flex;
                justify-content: flex-start;
                height: calc(100vh - 66px);

                > .page {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>