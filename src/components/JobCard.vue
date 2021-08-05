<template>
      <div class="job m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
           <div class="p-3">
              <div class="text-center">
                  <p><b>{{job.company}}</b></p>
                   <p><b>{{job.rate}} - {{job.hours}}</b></p>
                    <p><b>{{job.description}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>

<script>

export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup() {
    return{}
  }
}
</script>

<style land="scss" scoped>
</style>