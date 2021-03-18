 <template>
  <div>
    <div class="row justify-center text-h2">SWAPI News</div>
    <div class="q-pa-md q-gutter-lg justify-center row">
      <q-card
        class="my-card q-card col-xs-12 col-sm-6 col-md-4"
        v-for="movie in movies"
        :key="movie.episode_id"
      >
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          :height="150"
        >
        </q-parallax>

        <q-card-section>
          <div class="text-h6 q-mb-md">{{ movie.title }}</div>
          <div class="text-subtitle2">{{ movie.opening_crawl | truncateByWord}}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 320px
</style>

<script>

export default {
  name: "StarWarNews",
  components: {},
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$axios
        .get("https://swapi.dev/api/films/")
        .then((resp) => {
          this.movies = resp.data.results.slice(0, 4);
          window.console.log(this.movies);
        })
        .catch((err) => {
          window.console.error(err);
        });
    },
  },
};
</script>
