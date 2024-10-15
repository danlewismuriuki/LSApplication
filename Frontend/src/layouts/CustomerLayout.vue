<!-- src/layouts/CustomerLayout.vue -->
<template>
  <div>
    <header>
      <h1>Customer Management</h1>
      <nav>
        <router-link to="/customers">Customer List</router-link>
        <router-link to="/customers/new">Create Customer</router-link>
        <!-- Add more customer-related links here -->
      </nav>
    </header>
    <main>
      <router-view></router-view>
      <!-- Placeholder for nested routes -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomerLayout',
});
</script>
