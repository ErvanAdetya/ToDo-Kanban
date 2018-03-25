<template>
  <div class="row">
    <div class="col-md-3">
      <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Back-Log</div>
        <div v-if="backLogs">
          <backlog-tile></backlog-tile>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">To Do</div>
        <div v-if="todos">
          <todo-tile></todo-tile>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Doing</div>
        <div v-if="doing">
          <doing-tile></doing-tile>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Done</div>
        <div v-if="done">
          <done-tile></done-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BacklogTile from '@/components/BacklogTile'
import TodoTile from '@/components/TodoTile'
import DoingTile from '@/components/DoingTile'
import DoneTile from '@/components/DoneTile'
import { mapGetters } from 'vuex'

export default {
  components: {
    BacklogTile,
    TodoTile,
    DoingTile,
    DoneTile
  },
  computed: {
    ...mapGetters({
      backLogs: 'getBackLog',
      todos: 'getToDo',
      doing: 'getDoing',
      done: 'getDone'
    })
  },
  methods: {

  }
}
</script>

<style>
small {
  cursor: pointer
}
small:hover {
  color: green
}
</style>
