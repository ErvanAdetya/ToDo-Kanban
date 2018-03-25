<template>
  <div>
    <div class="card-body list" v-for="(value, i) in doing" :key="i">
      <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">{{value.title}}</div>
        <div class="card-body row">
          <div class="col-md-4">
            <small @click="prev(i, value)">Prev</small>
          </div>
          <div class="col-md-4">
            <small @click="deleteTask(i)">Delete</small>
          </div>
          <div class="col-md-4">
            <small @click="next(i, value)">Next</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      doing: 'getDoing'
    })
  },
  methods: {
    deleteTask (child) {
      let payload = {
        status: 'doing',
        child: child
      }
      this.$store.dispatch('deleteTask', payload)
    },
    next (child, task) {
      task.status = 'done'
      this.$store.dispatch('addTask', task)
      this.deleteTask(child)
    },
    prev (child, task) {
      task.status = 'todo'
      this.$store.dispatch('addTask', task)
      this.deleteTask(child)
    }
  }
}
</script>

<style>

</style>
