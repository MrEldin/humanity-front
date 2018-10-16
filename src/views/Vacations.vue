<template lang="pug">
    .app-vacations
        section.header
            .header__info
                .header__icon
                    i(:class="'icon-Significon-Building'")
                .header__title
                    h1 Vacations
            .header__actions
                .smart-button(v-if="$auth.check('create-vacation')" @click="isComponentModalActive = true")
                    p Add Vacation
                    i(:class="'icon-Significon-Plus'")
        section.body(v-if="vacations.length > 0")
            .header
                .column
                    h1 First Name
                .column
                    h1 Last Name
                .column
                    h1 Name
                .column
                    h1 Left days
            .vacations
                .vacation(v-for="vacation in vacations" :class="{'vacation_approved': !vacation.approved}")
                    .vacation_item
                        h1 {{vacation.user.first_name}}
                    .vacation_item
                        h1 {{vacation.user.last_name}}
                    .vacation_item
                        h1 {{vacation.name}}
                    .vacation_item
                        h1 {{20 - vacation.dates.length}} days
                    .vacation_edit
                        .smart-button(
                        v-if="$auth.check('approve-vacation') && !vacation.approved"
                        @click="approveVacation(vacation.id)")
                            p Approve
                            i(:class="'icon-Significon-Edit'")
                        .smart-button(
                        v-if="$auth.check('disapprove-vacation') && vacation.approved"
                        @click="disapproveVacation(vacation.id)")
                            p Disapprove
                            i(:class="'icon-Significon-List'")
                        .smart-button(
                        v-if="$auth.check('index-vacation')"
                        @click="previewDates(vacation.dates)")
                            p View
                            i(:class="'icon-Significon-List'")
        section.no-content(v-if="vacations.length === 0")
        section.no-content(v-if="vacations.length === 0")
            h1 There are no vacations created yet.
        b-modal(:active.sync="isComponentModalActive" @close="modalClosed")
            new-vacation-modal
        b-modal(:active.sync="isVacationModalActive")
            vacation-modal(v-bind="{dates}")
</template>

<script>
import Vue from 'vue'
import PageHeader from '../components/layout/PageHeader'
import NewVacationModal from '../components/modals/NewVacationModal'
import {mapActions, mapGetters} from 'vuex'
import VacationModal from "../components/modals/VacationModal";

export default {
  name: 'settings',
  components: {VacationModal, NewVacationModal, PageHeader},
  mounted () {
    this.getVacations()
  },
  computed: {
    ...mapGetters({
      vacations: 'vacations'
    })
  },
  data () {
    return {
      isComponentModalActive: false,
      isVacationModalActive: false,
      errors: [],
      costs: [],
      dates: []
    }
  },
  methods: {
    ...mapActions({
      getVacations: 'getVacations',
      approveVacation: 'approveVacation',
      disapproveVacation: 'disapproveVacation'
    }),
    modalClosed () {
      this.getVacations()
    },
    checkVacation (id) {
      this.$router.push(`vacation/${id}`)
    },
    checkCampaigns (id) {
      this.$router.push(`campaigns/${id}`)
    },
    previewDates(dates) {
      this.dates = dates;
      this.isVacationModalActive = !this.isVacationModalActive;
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    .app-vacations {
        width: 100%;
        height: 100%;

        section.header {
            width: 100%;
            height: $headerHeight;
            background: #67b5db; /* Old browsers */
            background: -moz-linear-gradient(left, #67b5db 0%, #2a85d2 73%, #1473ce 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(left, #67b5db 0%, #2a85d2 73%, #1473ce 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, #67b5db 0%, #2a85d2 73%, #1473ce 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#67b5db', endColorstr='#1473ce', GradientType=1); /* IE6-9 */
            -webkit-box-shadow: 0px 33px 43px -27px rgba(170, 190, 209, 1);
            -moz-box-shadow: 0px 33px 43px -27px rgba(170, 190, 209, 1);
            box-shadow: 0px 33px 43px -27px rgba(170, 190, 209, 1);
            display: flex;

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

            .header__actions {
                width: 50%;
                padding-right: 50px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

        }

        @media screen and ($largeTablets) {
            section.header {
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
                            font-size: 20px;
                            color: #ffffff;
                        }
                    }

                    .header__title {
                        display: none;
                    }
                }
            }
        }

        section.body {
            width: 100%;
            height: calc(100vh - ($topBarHeight + $headerHeight));
            padding: 20px;

            .header {
                width: 100%;
                height: 10%;
                display: flex;
                justify-content: center;
                align-items: center;

                .column {
                    width: calc(100% / 5);
                    h1 {
                        font-size: 20px;
                        color: $settingsVacationFontColor;
                    }
                }
            }

            .vacations {
                height: 100%;

                .vacation {
                    width: 100%;
                    min-width: 100%;
                    height: 80px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    background-color: #ffffff;
                    -webkit-box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
                    -moz-box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
                    box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-left: 10px solid green;
                    cursor: pointer;
                    -webkit-transition: 400ms; /* Safari */
                    transition: 400ms;

                    .vacation_item {
                        width: calc(100% / 3);
                        h1 {
                            font-family: Montserrat;
                            font-size: 17px;
                            color: $settingsVacationFontColor;
                        }

                        img {
                            width: 50px;
                        }
                    }

                    &.vacation_approved {
                        border-color: red;
                    }

                    .vacation_edit {
                        display: none;
                    }

                    &:hover {
                        background-color: #3e93d4;
                        border-left: 10px solid #3e93d4;
                        .vacation_item {
                            display: none;
                        }

                        .vacation_edit {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                        }
                    }
                }
            }
        }

        @media screen and ($largeTablets) {
            section.body {
                overflow-x: scroll !important;
            }
        }

        section.no-content {
            width: 100%;
            height: calc(100vh - 196px);
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            color: $iconDashboard;
        }
    }
</style>
