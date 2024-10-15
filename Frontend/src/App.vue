<!-- <template>
  <router-view />
</template>

<script setup lang="ts">
defineOptions({
  name: 'App'
});
</script> -->

<!-- <template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../src/layouts/CustomerProject.vue';

export default defineComponent({
  components: {
    Layout,
  },
});
</script> -->

<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../src/layouts/CustomerProject.vue';
import '../src/css/app.scss'; // Import global styles

export default defineComponent({
  components: {
    Layout,
  },
});
</script>
