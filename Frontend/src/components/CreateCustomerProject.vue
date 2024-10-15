<template>
  <q-form @submit.prevent="submitForm" class="common-form">
    <q-input v-model="customerName" label="Customer Name" required />
    <q-input v-model="customerEmail" label="Customer Email" required />
    <q-input v-model="customerAddress" label="Customer Address" required />

    <q-input v-model="projectName" label="Project Name" required />
    <q-input
      v-model="projectDescription"
      label="Project Description"
      type="textarea"
      required
    />

    <q-btn type="submit" label="Create Customer and Project" />
  </q-form>

  <q-table :rows="customers" :columns="customerColumns" />
  <q-table :rows="projects" :columns="projectColumns" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

// Define interfaces for your data
interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  customerId: number;
}

interface Column {
  name: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  field: string | ((row: Customer | Project) => string | number); // Updated type definition
}

export default defineComponent({
  setup() {
    const customerName = ref('');
    const customerEmail = ref('');
    const customerAddress = ref('');
    const projectName = ref('');
    const projectDescription = ref('');

    const customers = ref<Customer[]>([]);
    const projects = ref<Project[]>([]);

    const submitForm = async () => {
      try {
        // Step 1: Create Customer
        const customerResponse = await axios.post<Customer>('/api/customers', {
          name: customerName.value,
          email: customerEmail.value,
          address: customerAddress.value,
        });

        const customerId = customerResponse.data.id; // Assuming the ID is returned after creation

        // Step 2: Create Project
        await axios.post<Project>('/api/projects', {
          customerId, // Attach the created customer ID
          name: projectName.value,
          description: projectDescription.value,
        });

        // Reset the form fields
        customerName.value = '';
        customerEmail.value = '';
        customerAddress.value = '';
        projectName.value = '';
        projectDescription.value = '';

        // Fetch updated lists
        await fetchCustomersAndProjects();
      } catch (error) {
        console.error('Error creating customer or project:', error);
      }
    };

    const fetchCustomersAndProjects = async () => {
      try {
        const customerResponse = await axios.get<Customer[]>('/api/customers');
        customers.value = customerResponse.data;

        const projectResponse = await axios.get<Project[]>('/api/projects');
        projects.value = projectResponse.data;
      } catch (error) {
        console.error('Error fetching customers or projects:', error);
      }
    };

    // Fetch customers and projects when the component mounts
    onMounted(fetchCustomersAndProjects);

    const customerColumns: Column[] = [
      { name: 'name', label: 'Customer Name', align: 'left', field: 'name' },
      { name: 'email', label: 'Email', align: 'left', field: 'email' },
      { name: 'address', label: 'Address', align: 'left', field: 'address' },
    ];

    const projectColumns: Column[] = [
      { name: 'name', label: 'Project Name', align: 'left', field: 'name' },
      {
        name: 'description',
        label: 'Description',
        align: 'left',
        field: 'description',
      },
      {
        name: 'customerId',
        label: 'Customer ID',
        align: 'left',
        field: 'customerId',
      },
    ];

    return {
      customerName,
      customerEmail,
      customerAddress,
      projectName,
      projectDescription,
      customers,
      projects,
      submitForm,
      customerColumns,
      projectColumns,
    };
  },
});
</script>
