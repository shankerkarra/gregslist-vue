<template>
  <div class=job <div class="container-fluid">
    <div class="row">
      <div class="col">
         <JobForm/>
      </div>
  </div>
  <div class="row">
    <div class="col-4" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
    </div>
  </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {jobsService} from '../services/JobsService'
import JobForm from '../components/JobForm.vue'
import JobCard from '../components/JobCard.vue'

export default {
  nme: 'Job',
  setup() {
    onMounted(async() => {
      try{
        await jobsService.getJobs()
      }catch(error){
        console.error(error)
      }
    })
    return{
      jobs: computed(() => AppState.jobs)
    }
  },
  components :{
    JobCard, 
    JobForm
  }
}
</script>
