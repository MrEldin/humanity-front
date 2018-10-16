<template lang="pug">
    .top-bar
        .logo
            h1
                span.left HUMAN
                span.right ITY
        .search
        .header
            .header_item
                a(@click="logout()")
                    i(class="icon-Significon-Power")

</template>

<script>
export default {
  name: 'Topbar',
  components: {},
  data () {
    return {
      errors: [],
      postBody: {
        username: 'nesto'
      },
      isComponentModalActive: false,
      formProps: {
        description: null,
        bill: null
      }
    }
  },
  methods: {
    logout () {
      this.$auth.logout({
        makeRequest: false,
        redirect: '/login'
      })
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    .top-bar {
        width: 100%;
        height: $topBarHeight;
        //@include background();
        background-color: #ffffff;
        display: flex;
        -webkit-box-shadow: 0px 1px 1px 0px rgba(210, 210, 210,0.37);
        -moz-box-shadow: 0px 1px 1px 0px rgba(210, 210, 210,0.37);
        box-shadow: 0px 1px 1px 0px rgba(210, 210, 210,0.37);

        .logo {
            width: 65%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            img {
                width: 100px;
            }

            h1 {
                color: #ffffff;
                font-size: 25px;
                font-weight: 400;
                margin-left: 40px;

                .left {
                    font-weight: 400;
                    color: $dashboardBackground;
                    margin-right: 5px;
                }

                .right {
                    font-weight: 600;
                    color: $dashboardBackgroundLight;
                }
            }
        }

        .search{
            width: 30%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .dashboard_input {
                width: 200px;
            }
        }

        .header {
            width: 15%;
            height: 100%;
            display: flex;
            justify-content: flex-end;

            .header_item {
                width: 96px;
                min-width: 50px;
                display: flex;
                align-items: center;
                justify-content: center;

                > .button {

                    i {
                        padding-left: 10px;
                    }
                }

                > a {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    -webkit-transition: 600ms; /* Safari */
                    transition: 600ms;

                    > i {
                        color: $iconTopBar;
                        font-size: 25px;
                        -webkit-transition: 600ms; /* Safari */
                        transition: 600ms;
                    }

                    &.router-link-active, .router-link-exact-active {
                        background-color: $dashboardBackgroundLight;

                        > i {
                            color: #ffffff;
                        }
                    }

                    &:hover {
                        color: #ffffff;
                        background-color: $dashboardBackgroundLight;

                        > i {
                            color: #ffffff;
                        }
                    }
                }

                > img {
                    width: 50px;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
