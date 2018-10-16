<template lang="pug">
    .header__info
        .header__icon
            i(:class="icon")
        .header__title
            h1 {{title}}

</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      icon: {
        type: String
      },
      title: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .header__info {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 0 0 40px;

        .header__icon {
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                font-size: 25px;
                color: #ffffff;
            }
        }

        .header__title {
            width: calc(100% - 30px);
            display: flex;
            justify-content: flex-start;
            align-items: center;

            h1 {
                font-size: 25px;
                font-weight: 400;
                color: #ffffff;
            }
        }
    }
</style>