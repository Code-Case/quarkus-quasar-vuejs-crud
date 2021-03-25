<template>
  <div class="q-mt-lg">
    <div class="row justify-center text-h2">Open News</div>
    <div class="q-pa-md row q-gutter-lg justify-center col-md-4">
      <q-card
        class="my-card q-card col-xs-12 col-sm-6 col-md-4"
        v-for="article in news"
        :key="article.id"
      >
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          :height="150"
        >
        </q-parallax>

        <q-card-section>
          <div class="text-h6 q-mb-md">{{ article.title }}</div>
          <div class="text-subtitle2">
            {{ article.description | truncateByWord }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  max-width: 20rem
</style>

<script>
export default {
  name: "OpenNewsAPI",
  components: {},
  data() {
    return {
      news: []
    };
  },
  async created() {
    await this.getNews();
  },
  methods: {
    async getNews() {
      await this.$axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=751dd9ba2a62432ab7e7acbc62cb0512"
        )
        .then((resp) => {
          this.news = resp.data.articles.slice(0, 4);
        })
        .catch((err) => {
          window.console.error(err);
        });
    }
  }
};
</script>
