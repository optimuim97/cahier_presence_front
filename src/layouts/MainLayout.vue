<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Cahier de Présence</q-toolbar-title>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <!-- <q-item-label header>TABLEAU DE BORD</q-item-label> -->

        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>TABLEAU DE BORD</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/politicalStatus" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name />
          </q-item-section>
          <q-item-section>
            <q-item-label>PoliticalStatus</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Status" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name />
          </q-item-section>
          <q-item-section>
            <q-item-label>Status</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/TypePerson" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name />
          </q-item-section>
          <q-item-section>
            <q-item-label>TypePerson</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TypePerson" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name />
          </q-item-section>
          <q-item-section>
            <q-item-label>TypePerson</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TypePerson" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name />
          </q-item-section>
          <q-item-section>
            <q-item-label>TypePerson</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
