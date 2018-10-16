<script>
import {Doughnut, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  data () {
    return {
      options: {
        showStroke: false,
        cutoutPercentage: 75,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: {
              display: false,
              color: '#9EA3B4'
            },
            ticks: {
              display: true,
              beginAtZero: true
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              color: '#9EA3B4',
              display: true,
              drawTicks: false,
              borderDashOffset: 50
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
