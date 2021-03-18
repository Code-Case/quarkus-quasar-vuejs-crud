 <template>
  <q-page padding>
    <StarWarsNews></StarWarsNews>
    <OpenNewsAPI></OpenNewsAPI>
  </q-page>
</template>
<style lang="sass" scoped>
</style>

<script>
import StarWarsNews from "../apiGateways/StarWarsNews";
import OpenNewsAPI from "../apiGateways/OpenNewsAPI";

export default {
  name: "News",
  components: { StarWarsNews, OpenNewsAPI },
  data() {
    return {};
  },
};
</script>
