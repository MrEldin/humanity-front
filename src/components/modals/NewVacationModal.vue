<template>
    <div>
        <div class="modal-card" style="width: auto; text-align: left; height: 580px">
            <header class="modal-card-head">
                <p class="modal-card-title">Create organisation</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Name"
                         :type="errors.name != null ? 'is-danger' : '' "
                         :message="errors.name != null ? errors.name : ''">
                    <b-input
                            type="text"
                            v-model="formProps.name"
                            :value="formProps.name"
                            placeholder="Name">
                    </b-input>
                </b-field>
                <v-date-picker
                        mode='multiple'
                        :formats='formats'
                        v-model='formProps.dates'
                        popoverVisibility='focus'>
                    <b-field :type='inputState.type' slot-scope='props'>
                        <b-input
                                type='text'
                                icon='calendar'
                                :value='props.inputValue'
                                :placeholder='inputState.message'
                                @change.native='props.updateValue($event.target.value)'
                                expanded>
                        </b-input>
                        <p
                                class='control'
                                v-if='selectedValue'>
                            <a
                                    :class='["button", inputState.type]'
                                    @click='selectedValue = null; formProps.dates = []'>
                                Clear
                            </a>
                        </p>
                    </b-field>
                </v-date-picker>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-info" @click="createOrganisation()">Create</button>
            </footer>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'NewVacationModal',
  data () {
    return {
      isSelectOnly: false,
      tags: [],
      allowNew: false,
      errors: [],
      selectedValue: true,
      formats: {
        title: 'MMMM YYYY',
        weekdays: 'W',
        navMonths: 'MMM',
        input: ['L', 'YYYY-MM-DD', 'MM/DD/YYYY'], // Only for `v-date-picker`
        dayPopover: 'L', // Only for `v-date-picker`
        data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'] // For attribute dates
      },
      formProps: {}
    }
  },
  props: {
  },
  methods: {
    createOrganisation () {
      return Vue.axios.post(`${this.$store.state.localPath}vacations`, this.formProps)
        .then(
          (response) => {
            this.$snackbar.open({
              message: `Vacation has been successfully created.`,
              position: 'is-top'
            })
            this.$parent.close()
            this.formProps = {}
          }
        )
        .catch(e => {
          this.errors = e.response.data.errors
        })
    }
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

</style>
