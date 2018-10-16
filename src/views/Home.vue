<template lang="pug">
    .dashboard
        section
            section.graph
                line-chart-tab
            section
                section.side(v-if="$auth.check('create-vacation')")
                    .item-body
                        .item
                            .item__header
                                .item__header__icon
                                    i(class="icon-Significon-News")
                                .item__header__title
                                    h1 Spend days in total
                            .item__body
                                doughnut-chart(:styles="doughnutStyles" :chart-data="vacationSpentDough()")
                                p {{vacationSpentPercentage}}%
                            .item__footer
                    .item-body
                        .item
                            .item__header
                                .item__header__icon
                                    i(class="icon-Significon-News")
                                .item__header__title
                                    h1 Left days in total
                            .item__body
                                doughnut-chart(:styles="doughnutStyles" :chart-data="vacationLeftDough()")
                                p {{vacationLeftPercentage}}%
                            .item__footer
        canvas(id="myCanvas")
</template>

<script>
import LineChartTab from '../components/boxes/LineChartTab'
import LineChart from '../components/graphs/LineChart'
import {mapActions, mapGetters} from 'vuex'
import DoughnutChart from '../components/graphs/DoughnutChart'

export default {
  name: 'home',
  components: {
    DoughnutChart,
    LineChart,
    LineChartTab
  },
  computed: {
    ...mapGetters({
      totalVacations: 'totalVacations'
    }),
    doughnutStyles () {
      return {
        height: '100%',
        width: '70%',
        maxHeight: '100%',
        minHeight: '100%',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    vacationLeftPercentage () {
      return _.round(((this.totalVacations.length / 20) * 100), 0)
    },
    vacationSpentPercentage () {
      return _.round((((20 - this.totalVacations.length) / 20) * 100), 0)
    }
  },
  mounted () {
    this.getTotalVacations()
  },
  created () {
  },
  data () {
    return {
      errors: [],
      costs: [],
      userVacations: [],
      dataset: {
        data: []
      }
    }
  },
  methods: {
    ...mapActions({
      getTotalVacations: 'getTotalVacations'
    }),
    vacationSpentDough () {
      return {
        labels: ['Left', 'Spent'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#d7d7d7', '#69c2e8'],
            data: [20 - this.totalVacations.length, this.totalVacations.length],
            hoverBackgroundColor: '#1a5590',
            borderWidth: [0, 0]
          }
        ]
      }
    },
    vacationLeftDough () {
      return {
        labels: ['Spent', 'Left'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#d7d7d7', '#69c2e8'],
            data: [this.totalVacations.length, 20 - this.totalVacations.length],
            hoverBackgroundColor: '#1a5590',
            borderWidth: [0, 0]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import '../assets/scss/main';

    @mixin item($bodyBackground: #f3f5f6) {
        $itemHeadeWidth: 50px;

        .item {
            width: 100%;
            margin-bottom:20px;
            height: 400px;
            -webkit-box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
            -moz-box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
            box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);

            .item__header {
                width: 100%;
                height: 70px;
                background-color: #ffffff;
                -webkit-box-shadow: 0px 1px 1px 0px rgba(210, 210, 210,0.37);
                -moz-box-shadow: 0px 1px 1px 0px rgba(210, 210, 210,0.37);
                box-shadow: 0px 1px 1px 0px rgba(210, 210, 210,0.37);
                display: flex;

                .item__header__icon {
                    width: $itemHeadeWidth;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    i {
                        font-size: 25px;
                        color: $iconDashboard;
                    }
                }

                .item__header__title {
                    width: calc(100% - $itemHeadeWidth);
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    h1 {
                        font-size: 25px;
                        color: $dashboardBackgroundLight;
                    }

                    @media screen and ($mediumTablets) {
                        /* start of medium tablet styles */
                        h1 {
                            font-size: 20px;
                            color: $dashboardBackgroundLight;
                        }
                    }
                }
            }

            .item__body {
                width: 100%;
                padding: 20px 0;
                background-color: $bodyBackground;
                height: calc(100% - 140px);
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                p {
                    position: absolute;
                    font-size: 50px;
                    color: $dashboardBackgroundLight;
                    font-family: Montserrat;
                }
            }

            .item__footer {
                width: 100%;
                height: 70px;
                background-color: #ffffff;
            }
        }
    }

    .dashboard {
        width: 100%;
        height: 100%;
        padding: 20px 40px 20px 40px;
        overflow: scroll;

        section {
            section {
                width: 100%;
                flex-wrap: wrap;
                display: flex;
                height: auto;

                section.side {
                    width: 100%;
                    height: auto;
                    display: flex;

                    .item-body {
                        width: 50%;
                        padding-right: 10px;

                        &:last-child {
                            padding-right: 0px;
                            padding-left: 10px;
                        }

                        @include item()
                    }
                }

                @media screen and ($mediumTablets) {
                    /* start of medium tablet styles */
                    section.side {
                        width: 50%;
                    }

                    section.normal {
                        width: 50%;
                    }
                }

                @media screen and ($phones) {
                    /* start of phone styles */
                    section.side {
                        width: 100%;
                        padding-right: 0;
                    }

                    section.normal {
                        width: 100%;
                        padding-left: 0;
                    }
                }
            }

            section.graph {
                width: 100%;
                background-color: #ffffff;
                margin-bottom: 20px;
                height: auto;
                display: flex;
                flex-direction: column;
                -webkit-box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
                -moz-box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
                box-shadow: 0px 0px 1px 1px rgba(210, 210, 210, 0.37);
            }
        }
    }
</style>
