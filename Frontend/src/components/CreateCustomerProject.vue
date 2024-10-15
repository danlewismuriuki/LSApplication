<template>
  <div>
    <q-form @submit.prevent="submitForm" class="common-form">
      <q-input v-model="customerName" label="Customer Name" required />
      <q-input
        v-model="customerEmail"
        label="Customer Email"
        type="email"
        required
      />
      <q-input v-model="customerAddress" label="Customer Address" required />

      <q-input v-model="projectName" label="Project Name" required />
      <q-input
        v-model="projectDescription"
        label="Project Description"
        required
      />

      <q-btn type="submit" label="Create Customer and Project" />

      <!-- Display success or error message -->
      <p v-if="message">{{ message }}</p>
    </q-form>

    <h2>Customers</h2>
    <div class="table-container">
      <q-table
        :rows="customers"
        :columns="customerColumns"
        row-key="id"
        no-data-label="No customers found"
      />
    </div>

    <h2>Projects</h2>
    <div class="table-container">
      <q-table
        :rows="projects"
        :columns="projectColumns"
        row-key="id"
        no-data-label="No projects found"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { Customer, Project } from '../types/index'; // Import types
import '../css/styles.css';

export default defineComponent({
  setup() {
    const customerName = ref<string>('');
    const customerEmail = ref<string>('');
    const customerAddress = ref<string>('');
    const projectName = ref<string>('');
    const projectDescription = ref<string>('');
    const message = ref<string>(''); // To display success/error messages
    const customers = ref<Customer[]>([]); // Reactive array for customers
    const projects = ref<Project[]>([]); // Reactive array for projects

    // Define table columns
    const customerColumns = [
      {
        name: 'id',
        label: 'ID',
        align: 'left' as const,
        field: 'id',
        sortable: true,
      },
      {
        name: 'name',
        label: 'Name',
        align: 'left' as const,
        field: 'name',
        sortable: true,
      },
      {
        name: 'email',
        label: 'Email',
        align: 'left' as const,
        field: 'email',
        sortable: true,
      },
      {
        name: 'address',
        label: 'Address',
        align: 'left' as const,
        field: 'address',
        sortable: true,
      },
      {
        name: 'createdAt',
        label: 'Created At',
        align: 'left' as const,
        field: 'createdAt',
        sortable: true,
      },
    ];

    const projectColumns = [
      {
        name: 'id',
        label: 'ID',
        align: 'left' as const,
        field: 'id',
        sortable: true,
      },
      {
        name: 'name',
        label: 'Project Name',
        align: 'left' as const,
        field: 'name',
        sortable: true,
      },
      {
        name: 'description',
        label: 'Description',
        align: 'left' as const,
        field: 'description',
        sortable: true,
      },
      {
        name: 'customerId',
        label: 'Customer ID',
        align: 'left' as const,
        field: 'customerId',
        sortable: true,
      },
      {
        name: 'createdAt',
        label: 'Created At',
        align: 'left' as const,
        field: 'createdAt',
        sortable: true,
      },
    ];

    // Function to fetch customers and projects from the API
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get(
          'http://localhost:3000/api/customers'
        );
        customers.value = customerResponse.data;

        const projectResponse = await axios.get(
          'http://localhost:3000/api/projects'
        );
        projects.value = projectResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Function to handle errors
    const handleError = (error: unknown) => {
      if (axios.isAxiosError(error)) {
        message.value =
          'Error: ' + (error.response?.data.message || error.message); // Display Axios error message
      } else {
        message.value =
          'An unexpected error occurred: ' + (error as Error).message;
      }
      console.error('Error:', error); // Log the error
    };

    // Function to submit the form
    const submitForm = async () => {
      const customer: Customer = {
        id: 0,
        name: customerName.value,
        email: customerEmail.value,
        address: customerAddress.value,
      };

      try {
        // Create customer
        const customerResponse = await axios.post(
          'http://localhost:3000/api/customers',
          customer
        );
        const createdCustomer = customerResponse.data;

        // Optimistically update customers array
        customers.value.push(createdCustomer);

        const project: Project = {
          id: 0,
          name: projectName.value,
          description: projectDescription.value,
          customerId: createdCustomer.id, // Use the created customer ID
        };

        // Create the project
        const projectResponse = await axios.post(
          'http://localhost:3000/api/projects',
          project
        );
        const createdProject = projectResponse.data;

        // Optimistically update projects array
        projects.value.push(createdProject);

        // Set success message
        message.value = 'Customer and Project created successfully!';

        // Optionally, reset the form fields
        customerName.value = '';
        customerEmail.value = '';
        customerAddress.value = '';
        projectName.value = '';
        projectDescription.value = '';

        // Fetch the updated project list
        await fetchData(); // Fetch the latest projects from the database
      } catch (error) {
        handleError(error);
      }
    };

    // Fetch initial data on component mount
    onMounted(fetchData);

    return {
      customerName,
      customerEmail,
      customerAddress,
      projectName,
      projectDescription,
      message,
      customers,
      projects,
      customerColumns,
      projectColumns,
      submitForm,
    };
  },
});
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
