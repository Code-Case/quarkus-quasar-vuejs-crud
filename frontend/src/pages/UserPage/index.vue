<template>
  <q-page padding>
    <UserAPI></UserAPI>
  </q-page>
</template>

<script>
import UserAPI from "./UserAPI";

export default {
  name: "UserEditor",
  components: { UserAPI },
  data() {
    return {};
  }
};
</script>
