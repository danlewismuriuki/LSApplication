<template>
  <div>
    <h1>Welcome to the Customer Management System</h1>
    <CustomerForm @customer-added="fetchCustomers" />
    <h2>Customer List</h2>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        <h3>{{ customer.name }}</h3>
        <p>Email: {{ customer.email }}</p>
        <p>Address: {{ customer.address }}</p>
      </li>
    </ul>
    <router-link to="/projects">View Projects</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import CustomerForm from '../components/CustomerForm.vue'; // Adjust path if necessary
import { Customer } from '../types/index'; // Import the Customer type

export default defineComponent({
  components: {
    CustomerForm,
  },
  setup() {
    // Explicitly define the type of customers as an array of Customer objects
    const customers = ref<Customer[]>([]);

    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers'); // Adjust API endpoint as needed
        customers.value = response.data; // Assuming the API returns an array of customers
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    onMounted(fetchCustomers); // Fetch customers when the component mounts

    return {
      customers,
      fetchCustomers,
    };
  },
});
</script>

<style scoped>
/* Add styles to manage size and layout */
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  margin-top: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
}
</style>
