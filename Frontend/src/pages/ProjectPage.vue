<!-- ProjectPage.vue -->
<template>
  <div>
    <h1>Create Project</h1>
    <ProjectForm />
    <!-- Link the form component here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProjectForm from '../components/ProjectForm.vue'; // Adjust the path if needed

export default defineComponent({
  components: {
    ProjectForm,
  },
});
</script>
