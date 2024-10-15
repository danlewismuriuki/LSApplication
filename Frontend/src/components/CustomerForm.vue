<template>
  <q-form @submit="submitForm" class="common-form">
    <q-input v-model="customerName" label="Customer Name" required />
    <q-input
      v-model="customerEmail"
      label="Customer Email"
      type="email"
      required
    />

    Address input as a single string
    <q-input v-model="customerAddress" label="Customer Address" required />

    <q-btn type="submit" label="Create Customer" />
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Customer } from '../types/index'; // Importing types

export default defineComponent({
  setup() {
    const customerName = ref<string>('');
    const customerEmail = ref<string>('');
    const customerAddress = ref<string>(''); // Address is a simple string

    const submitForm = async () => {
      const customer: Customer = {
        id: Date.now(), // Generate a simple ID for the example (or replace it with your logic)
        name: customerName.value,
        email: customerEmail.value,
        address: customerAddress.value, // Include the address in the customer object
      };

      try {
        await axios.post('/api/customers', customer);
        // Handle successful form submission (e.g., show a success message)
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error('Error creating customer:', error);
      }
    };

    return {
      customerName,
      customerEmail,
      customerAddress,
      submitForm,
    };
  },
});
</script>
