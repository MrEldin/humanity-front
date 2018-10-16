<template>
    <div id="app" class="login_background">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    .login_background {
        background-color: $loginBackground;
        width: 100%;
        height: 100vh;
    }
</style>