<template>
  <div>
    <div v-for="expense in list" class="expense">
      <p>{{ expense.date }} - R$ {{ expense.amount }} </p>
      <p>{{ expense.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    list () {
      return this.$store.state.Expenses.list
    }
  }
}
</script>

<style lang="stylus">

.expense
  border-bottom: 1px solid #e1e1e1
  padding-top: 10px
</style>
