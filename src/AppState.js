import { reactive } from "vue"

export const AppState = reactive({
  cars: [],
  activeCar: {},
  houses: [],
  activeHouse: {},
  jobs: [],
  activeJob: {}
})