<template>
  <div class="card mt-2">
    <div class="card-header" @click="showed = !showed">
      {{ user.name }} {{ user.surname }}
    </div>
    <div class="card-body d-flex justify-content-between" v-if="showed">
      {{ user.phone }}
      <button class="btn btn-danger float-right" @click="$emit('del', user.id)">Sil</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      showed: false,
    };
  },
};
</script>

<style scoped>
.card-header {
  cursor: pointer;
}
</style>
