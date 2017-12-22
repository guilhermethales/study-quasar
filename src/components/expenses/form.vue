<template>
  <form @submit.prevent="submit">
    <input ref="amount" class="my-input" type="number" v-model="expense.amount" placeholder="R$">
    <input class="my-input" type="text" v-model="expense.description" placeholder="Descrição">
    <input class="my-input" type="text" v-model="expense.date" placeholder="Data">
    <button class="primary my-button">Salvar</button>
  </form>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Form',
  data () {
    return {
      expense: {
        amount: '',
        description: '',
        date: moment().format('DD/MM/YYYY')
      }
    }
  },
  methods: {
    submit () {
      const cloned = JSON.parse(JSON.stringify(this.expense))
      this.$store.commit('UpdateListExpense', cloned)
      this.resetForm()
    },
    resetForm () {
      this.expense.amount = ''
      this.expense.description = ''
      this.expense.date = moment().format('DD/MM/YYYY')
      this.$refs.amount.focus()
    }
  }
}
</script>

<style lang="stylus">
.my-input
  width: 100%;
  margin: 5px 0;

.my-button
  width: 100%

</style>
