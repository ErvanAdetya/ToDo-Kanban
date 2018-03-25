<template>
  <div>
    <div class="card-body list" v-for="(value, i) in backLogs" :key="i">
      <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">{{value.title}}</div>
        <div class="card-body row">
          <div class="col-md-4">
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
      backLogs: 'getBackLog'
    })
  },
  methods: {
    deleteTask (child) {
      let payload = {
        status: 'backLog',
        child: child
      }
      this.$store.dispatch('deleteTask', payload)
    },
    next (child, task) {
      task.status = 'todo'
      this.$store.dispatch('addTask', task)
      this.deleteTask(child)
    }
  }
}
</script>

<style>

</style>
