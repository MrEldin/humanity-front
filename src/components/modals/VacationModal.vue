<template>
    <div>
        <div class="modal-card" style="width: auto; text-align: left;">
            <header class="modal-card-head">
                <p class="modal-card-title">Preview vacation</p>
            </header>
            <section class="modal-card-body">
                <v-calendar :attributes='attrs'>
                </v-calendar>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
            </footer>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'VacationModal',
  data () {
    return {
      isSelectOnly: false,
      tags: [],
      allowNew: false,
      errors: [],
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#42d3ff'
          },
          dates: this.dates.map(date => this.$moment(date.date, "YYYY-MM-DD").toDate())
        }
      ]
    }
  },
  props: {
    dates: {}
  },
  mounted () {
  },
  methods: {
  },
  computed: {
    inputState () {
      if (!this.selectedValue) {
        return {
          type: 'is-danger',
          message: 'Date required.'
        }
      }
      return {
        type: 'is-primary',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
    .modal-card-body {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
