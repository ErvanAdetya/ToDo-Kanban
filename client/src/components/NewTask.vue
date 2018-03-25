<template>
  <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">New Task</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Title</label>
              <input type="text" class="form-control" id="title" v-model="title">
              <label for="recipient-name" class="col-form-label">Description</label>
              <input type="text" class="form-control" id="description" v-model="description">
              <label for="recipient-name" class="col-form-label">Point</label>
              <input type="text" class="form-control" id="point" v-model="point">
              <label for="recipient-name" class="col-form-label">Assigend To</label>
              <input type="text" class="form-control" id="assigned-to" v-model="assignedTo">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveTask()" data-dismiss="modal">Save Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ``,
      description: ``,
      point: ``,
      assignedTo: ``
    }
  },
  methods: {
    saveTask () {
      this.$store.dispatch('addTask', {
        status: 'backLog',
        title: this.title,
        description: this.description,
        point: this.point,
        assignedTo: this.assignedTo
      })
    }
  },
  created: function () {
    this.$store.dispatch('updater')
  }
}
</script>

<style>

</style>
