<template lang="pug">
    .graph
        canvas(id="myCanvas")
        .item_header
            .item_title
                .item__header__icon
                    i(class="icon-Significon-Chart-Bar")
                .item__header__title
                    h1 Statistics for vacations
        .item_body
            .item_graph
                line-chart(:styles="myStyles" :chart-data="datacollection")
</template>

<script>
import LineChart from '@/components/graphs/LineChart'
import Doughnut from 'vue-chartjs/es/BaseCharts/Doughnut'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'line-chart-tab',
  components: {Doughnut, LineChart},
  mounted () {
    this.getVacations()
    this.gradientLine()
  },
  data () {
    return {
      datacollection: [],
      budget: 30000,
      value: null
    }
  },
  watch: {
    'vacations': {
      handler: function (val, oldVal) {
        this.datacollection = {
          labels: _.map(val, (element) => {
            return element.name
          }),
          datasets: [
            {
              backgroundColor: this.gradient,
              data: _.map(val, (element) => {
                return element.dates.length
              }),
              borderColor: '#2196F3',
              borderWidth: 5
            }
          ]
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      getVacations: 'getVacations'
    }),
    gradientLine () {
      let canvas = document.getElementById('myCanvas')

      this.gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, 550)

      this.gradient.addColorStop(0, 'rgba(42, 133, 210, 2)');
      this.gradient.addColorStop(1, 'rgba(103, 181, 219, 0.7)');

      return this.gradient
    }
  },
  computed: {
    ...mapGetters({
      vacations: 'vacations'
    }),
    myStyles () {
      return {
        height: '100%',
        width: '100%',
        maxHeight: '100%',
        minHeight: '100%'
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import '../../assets/scss/main.scss';

    .graph {
        height: 100%;

        .item_header {
            width: 100%;
            height: 23%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .item_title {
                width: 100%;
                height: 70px;
                display: flex;

                .item__header__icon {
                    width: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    i {
                        font-size: 25px;
                        color: $iconDashboard;
                    }
                }

                .item__header__title {
                    width: calc(100% - 50px);
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    h1 {
                        font-size: 25px;
                        color: $dashboardBackgroundLight;
                    }
                }
            }

            > .item_info {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

                > .item_data {
                    width: 200px;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 1.5%;

                    > .item_data_graph {
                        padding: 5px 5px;
                        width: 60%;
                        height: 100%;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        p {
                            position: absolute;
                            font-size: 19px;
                            color: $contrast_color;
                            font-family: Montserrat;
                        }
                    }

                    > .item_data_value {
                        width: 40%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        h1 {
                            padding: 0 30px;
                            color: #FFFFFF;
                            font-family: Montserrat;
                            font-size: 22px;
                            font-weight: bold;
                            line-height: 28px;
                        }

                        p {
                            color: #9CA1B2;
                            font-family: Montserrat;
                            font-size: 16px;
                        }
                    }
                }
            }

            > .item_filters {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding-right: 20px;

            }

        }

        > .item_body {
            width: 100%;
            height: 77%;

            .item_graph {
                height: 100%;
                min-height: 100%;
            }
        }

        canvas {
            display: none;
        }
    }

</style>
