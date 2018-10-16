<template lang="pug">
    .sidebar
        .sidebar_item
            router-link(to="/home")
                i(class="icon-Significon-Dashboard")
                span.title Dashboard
        .sidebar_item
            router-link(to="/vacations")
                i(class="icon-Significon-Building")
                span.title Vacations
</template>

<script>
  export default {
    name: "sidebar"
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    .icon-Charts .path1:before {
        content: "\e907";
        color: #7e57c2;
    }
    .icon-Charts .path2:before {
        content: "\e908";
        color: #fff;
        margin-left: -1em;
    }
    .icon-Charts .path3:before {
        content: "\e909";
        color: #fff;
        margin-left: -1em;
    }

    .sidebar {
        height: 100%;
        width: $sideBarWidth;
        background-color: #ffffff;
        -webkit-box-shadow: 1px 0px 1px 0px rgba(210, 210, 210, 0.37);
        -moz-box-shadow: 1px 0px 1px 0px rgba(210, 210, 210,0.37);
        box-shadow: 1px 0px 1px 0px rgba(210, 210, 210,0.37);

        > .sidebar_item {
            width: 100%;
            height: 60px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-transition: 600ms; /* Safari */
            transition: 600ms;

            > a {
                width: 100%;
                height: 100%;
                font-size: 20px;
                color: $iconSidebar;
                -webkit-transition: 600ms; /* Safari */
                transition: 600ms;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-left: 5px solid transparent;

                i {
                    width: 60px;
                }

                .title {
                    font-family: "Montserrat";
                    font-size: 12px;
                    color: $iconSidebar;
                }

                &.router-link-active, .router-link-exact-active {
                    background-color: $sidebarBackground;
                    color: #ffffff;
                    border-left: 5px solid $sidebarDarkBackground;

                    .title {
                        color: #ffffff;
                    }
                }
            }

            &:hover {
                background-color: $sidebarBackground;

                > a {
                    color: #fff;

                    .title {
                        color: #ffffff;
                    }
                }
            }
        }

    }



    @media screen and ($largeTablets) {
        .sidebar {
            width: $sideBarWidthTablets;

            > .sidebar_item {

                > a {
                    font-size: 15px;
                    justify-content: center;

                    i {
                        width: 60px;
                    }

                    .title {
                        display: none;
                    }

                    &.router-link-active, .router-link-exact-active {
                        background-color: $sidebarBackground;
                        color: #ffffff;
                        border-left: none;
                    }
                }

                &:hover {
                    background-color: $sidebarBackground;

                    > a {
                        color: #fff;

                        .title {
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }
</style>