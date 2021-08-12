<template>
  <div id="app" class="container mt-2">
    <div class="d-flex justify-content-end">
      <button @click="add()" class="btn btn-success">Yeni Kişi</button>
    </div>
    <Row v-for="user in users" :user="user" :key="user.id" @del="del($event)" />
  </div>
</template>

<script>
import Row from "./components/Row.vue";
import ls from "./dist/ls.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    Row,
  },
  created() {
    this.users = ls("users");
  },
  methods: {
    add() {
      this.users.push({
        id: new Date() * 1,
        name: prompt("Name"),
        surname: prompt("Surname"),
        phone: prompt("Phone Number"),
      });
      ls("users", this.users);
    },
    del(userId) {
      let index = this.users.findIndex((i) => {
        return i.id == userId;
      });
      this.users.splice(index, 1);
      ls("users", this.users);
    },
  },
};
</script>
