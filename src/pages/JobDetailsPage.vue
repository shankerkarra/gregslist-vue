<template>
  <div class="job-detials-page">
    {{jobTitle}}-{{company}}
  <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>

<script>
import { computed, onMounted} from '@vue/runtime-core'
import {AppState} from '../AppState'
import {jobsService} from '../services/JobsService'
import {useRoute, useRouter} from 'vue-Router'

export default {
  setup() {
    const route=useRoute()
    const router = useRouter()
    onMounted(async() => {
      try{
        await jobsService.getJobsById(route.params.id)
      }catch(error){
        console.error(error)
      }
    })
    return{
      job:computed (()=> AppState.activeJob),
      async destroy(){
        try{
          await jobsService.destroy(route.params.id)
          route.push({name: 'Home'})
        }
        catch(error){
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
