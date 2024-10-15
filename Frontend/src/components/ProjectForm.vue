<template>
  <q-form @submit="submitForm" class="common-form">
    <q-input v-model="projectName" label="Project Name" required />
    <q-input
      v-model="projectDescription"
      label="Project Description"
      type="textarea"
      required
    />
    <q-btn type="submit" label="Create Project" />
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Project } from '../types/index';

export default defineComponent({
  setup() {
    const projectName = ref('');
    const projectDescription = ref('');

    const submitForm = async () => {
      const project: Project = {
        name: projectName.value,
        description: projectDescription.value,
      };

      try {
        await axios.post('/api/projects', project);
        // Handle successful form submission (e.g., show a success message)
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error('Error creating project:', error);
      }
    };

    return {
      projectName,
      projectDescription,
      submitForm,
    };
  },
});
</script>
