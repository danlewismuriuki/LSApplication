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

<!-- <template>
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
</script> -->

// In your main application file or a parent component
<template>
  <div>
    <CreateCustomerProject />
    <!-- Other components or content -->
  </div>
</template>

<script>
import CreateCustomerProject from './components/CreateCustomerProject.vue'; // Adjust the path as necessary

export default {
  components: {
    CreateCustomerProject,
    // Other components
  },
};
</script>
