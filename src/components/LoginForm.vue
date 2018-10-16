<template lang="pug">
    .login_form
        .login_form_box
            .form
                .form__header
                    .form__logo
                        h1.form__header__title Login
                .form__body
                    b-input.nar_login_input(v-model="postBody.email" type="email" size="is-medium" placeholder="Email" rounded)
                    b-input.nar_login_input(v-model="postBody.password" type="password" size="is-medium" placeholder="Passwort" rounded)
                    b-checkbox.nar_login_checkbox(size="is-small" type="is-info") Remember me
                    a.button.is-info.is-medium.is-fullwidth.is-rounded(@click="login()")
                        span Login
                        i(class="icon-Significon-Login")
                .form__footer

            .info
                .info__header
                    h1.logo
                        span.left HUMAN
                        span.right ITY
                .info__body
                    carousel(
                    :per-page="1"
                    :navigationEnabled="false"
                    :paginationEnabled="false"
                    :mouse-drag="true"
                    :autoplay="true"
                    :autoplayTimeout="3000"
                    :autoplayHoverPause="true"
                    :loop="true"
                    )
                        slide
                            .info_box
                                .info_box__data
                                    .info_title
                                        h1 You don't track your vacation?
                                    .info_description
                                        p This app will help you to track your vacation. You can create new vacation request and be always informed about the dates.
                                    .info_box_button
                        slide
                            .info_box
                                .info_box__data
                                    .info_title
                                        h1 Find your new date.
                                    .info_description
                                        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias beatae corporis distinctio, dolorem fugiat harum.

                        slide
                            .info_box
                                .info_box__data
                                    .info_title
                                        h1 Dates tracking.
                                    .info_description
                                        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias beatae corporis distinctio, dolorem fugiat harum.

</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      postBody: {
        username: 'nesto'
      },
      errors: []
    }
  },
  methods: {
    login () {
      this.$auth.login({
        url: '/login',
        data: {
          email: this.postBody.email,
          password: this.postBody.password
        },
        redirect: '/home'
      }).catch(e => {
        this.$snackbar.open({
          message: `Please check your credentials.`,
          type: 'is-danger',
          position: 'is-top'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    .info_box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        .info_box__data {
            .info_title {
                h1 {
                    color: #ffffff;
                    text-align: center;
                    font-size: 30px;
                }
            }

            .info_image {
                width: 100%;
                height: 250px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 250px;
                }
            }

            .info__body__title {
                color: #ffffff;
                font-size: 20px;
            }

            .info_box_button {
                padding: 0 30px;

                .button {
                    color: #ffffff !important;
                    background-color: $loginBackgroundTop !important;
                    margin-top: 20px;

                    &:hover {
                        background-color: #ffffff !important;
                        color: $loginBackgroundTop !important;

                        i {
                            color: $loginBackgroundTop !important;
                        }
                    }

                    i {
                        .path1 {
                            &:before {
                                color: #ffffff;
                            }
                        }

                        .path2 {
                            &:before {
                                color: $loginBackgroundTop;
                            }
                        }

                        .path3 {
                            &:before {
                                color: $loginBackgroundTop;
                            }
                        }
                    }
                }
            }

            .info_description {
                margin: 20px 0 30px 0;
                p {
                    color: #ffffff;
                    text-align: left;
                }
            }
        }
    }

    .button {
        display: flex;
        justify-content: space-between;
        background-color: #ffffff !important;
        color: $loginBackground !important;
        font-weight: 600;

        i {
            .path1 {
                &:before {
                    color: rgb(26, 85, 144);
                }
            }
        }

        &:hover {
            background-color: $loginBackground !important;
            color: #ffffff !important;

            i {
                color: #ffffff !important;
            }
        }

        span {
            display: flex;
            align-items: center;
            font-family: Montserrat;
        }

        &.register {
            margin-top: 20px;
            background-color: #42bf7b;

            &:hover {
                background-color: #358b54;
            }

            i {
                font-size: 16px;
            }
        }
    }

    .login_form {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #4d82ac; /* Old browsers */
        background: -moz-linear-gradient(top, #4d82ac 0%, #0a4788 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #4d82ac 0%, #0a4788 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #4d82ac 0%, #0a4788 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d82ac', endColorstr='#1a5590', GradientType=0); /* IE6-9 */

        .login_form_box {
            background-color: #454861;
            border-radius: 13px;
            -webkit-box-shadow: -8px 36px 62px 9px rgba(24, 70, 122, 0.75);
            -moz-box-shadow: -8px 36px 62px 9px rgba(24, 59, 110, 0.75);
            box-shadow: -8px 36px 62px 9px rgba(24, 59, 110, 0.75);
            width: 900px;
            height: 550px;
            display: flex;
            background-image: url("../assets/background.jpg");

            .form {
                border-top-left-radius: 13px;
                border-bottom-left-radius: 13px;
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                background: #67b5db; /* Old browsers */
                background: -moz-linear-gradient(-45deg, rgba(103, 181, 219, 1) 0%, rgba(42, 133, 210, 0.46) 73%, rgba(20, 115, 206, 0.46) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(-45deg, rgba(103, 181, 219, 1) 0%, rgba(42, 133, 210, 0.46) 73%, rgba(20, 115, 206, 0.46) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(135deg, rgba(103, 181, 219, 1) 0%, rgba(42, 133, 210, 0.46) 73%, rgba(20, 115, 206, 0.46) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#67b5db', endColorstr='#751473ce', GradientType=1); /* IE6-9 fallback on horizontal gradient */
                padding: 0 60px;

                .form__header {
                    flex: 1.5;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .form__logo {
                        width: 60%;
                    }

                    .form__header__title {
                        color: #ffffff;
                        font-size: 30px;
                        font-weight: 600;
                    }
                }

                .form__body {
                    flex: 2;

                    .nar_login_input {
                        margin-bottom: 20px;

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }

                    .nar_login_checkbox {
                        float: left;
                        color: #ffffff;
                        margin-bottom: 20px;
                        font-size: 12px;

                        .check {
                            border: 3px solid white !important;
                        }
                    }

                    .demo {
                        display: none;
                    }
                }

                .form__footer {
                    flex: 1;
                }
            }

            .info {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .info__header {
                    height: 30%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    h1 {
                        &.logo {
                            color: #ffffff;
                            font-size: 30px;
                            font-weight: 400;

                            .left {
                                font-weight: 400;
                                margin-right: 5px;
                            }

                            .right {
                                font-weight: 600;
                            }
                        }
                    }
                }

                .info__body {
                    height: 50%;
                    padding: 0 30px;
                }

                .info__footer {
                    height: 20%;
                    padding: 0 30px;
                }
            }

            @media screen and ($largeTablets) {
                .info {
                    display: none;
                }
            }
        }

        @media screen and ($largeTablets) {
            .login_form_box {
                width: 450px;

                .form {
                    width: 100%;
                    border-top-right-radius: 13px;
                    border-bottom-right-radius: 13px;

                    .form__body {

                        .button {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }

        @media screen and ($phones) {
            .login_form_box {
                width: 300px;
                height: 350px;

                .form {
                    width: 100%;
                    border-top-right-radius: 13px;
                    border-bottom-right-radius: 13px;
                    padding: 0 30px;

                    .form__header {

                        .form__header__title {
                            color: #ffffff;
                            font-size: 20px;
                            font-weight: 400;
                        }
                    }

                    .form__body {

                        .button {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 10px;
                            font-size: 9px;
                        }
                    }
                }
            }
        }
    }
</style>
