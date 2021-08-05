<template>
      <div class="house m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'HouseDetails', params: {id: house.id}}">
          <img :src="house.imgUrl" class="w-100" :alt="house.year">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{house.bedrooms}} - {{house.bathrooms}}</b></p>
                   <p><b>{{house.levels}} - {{house.price}}</b></p>
                    <p><b>{{house.year}} - {{house.description}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    house: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>