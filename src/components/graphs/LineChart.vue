<script>
import {Line, mixins} from 'vue-chartjs'

const {reactiveProp} = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  data () {
    return {
      dates: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              color: this.lineGradient,
              display: true,
              drawTicks: false,
              borderDashOffset: 50,
              tickMarkLength: 0,
              drawBorder: false
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true,
              reverse: false
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              display: false,
              tickMarkLength: 0,
              drawBorder: false
            },
            scaleLabel: {
              display: false
            }
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 12,
            bottom: 0
          }
        }
      },
      props: {
        chartData: {
          type: Array
        }
      }
    }
  },
  mounted () {
    this.options.scales.xAxes[0].gridLines.color = this.lineGradient;

    this.chartData.datasets[0].backgroundColor = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

    this.chartData.datasets[0].backgroundColor.addColorStop(0, 'rgba(42, 133, 210, 2)');
    this.chartData.datasets[0].backgroundColor.addColorStop(1, 'rgba(103, 181, 219, 0.7)');

    this.renderChart(this.chartData, this.options);
  },
  computed: {
    gradientColor () {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

      this.gradient.addColorStop(1, 'rgba(105,194,232, 1)')
      this.gradient.addColorStop(0, 'rgba(26,85,144, 0.1)')

      return this.gradient
    },
    lineGradient () {
      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

      this.gradient2.addColorStop(0, 'rgba(77,130,172, 0)')
      this.gradient2.addColorStop(0.5, 'rgba(77,130,172, 0.25)')
      this.gradient2.addColorStop(1, 'rgba(77,130,172, 1)')

      return this.gradient2
    }
  }
}
</script>
