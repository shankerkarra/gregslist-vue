import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'

import Home from '../pages/Home.vue'
import Car from '../pages/Car.vue'
import House from '../pages/House.vue'
import Job from '../pages/Job.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Car',
    component: Car
  },
  {
    path: '/',
    name: 'House',
    component: House
  },
  ,
  {
    path: '/',
    name: 'Job',
    component: Job
  },
  {
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }
  ,
  {
    // required param ':id'
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }
  ,
  {
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
