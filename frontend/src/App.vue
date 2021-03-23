<template>
  <div id="q-app">
    <q-layout view="hHh Lpr fFf">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title> Quarkus App </q-toolbar-title>

          <q-tabs
            dense
            align="right"
            class="bg-primary text-white shadow-2"
            :breakpoint="0"
          >
            <router-link
              v-for="route in $router.options.routes"
              :key="route.path"
              :to="route.path"
              >{{ route.name }}</router-link
            >
          </q-tabs>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<style lang="sass" scoped>
.q-tabs a
  color: white
  font-weight: bold
  font-size: 1rem
  margin-left: .5rem
  text-transform: uppercase
  text-decoration: none

  &:hover
    text-decoration: underline

  &.router-link-active
    text-decoration: underline
</style>

<script>
import "./filter";

export default {
  name: "App",
};
</script>
