<template>
  <q-form @submit.prevent="submitForm" class="common-form">
    <q-input v-model="customerName" label="Customer Name" required />
    <q-input
      v-model="customerEmail"
      label="Customer Email"
      type="email"
      required
    />
    <q-input v-model="customerAddress" label="Customer Address" required />

    <q-btn type="submit" label="Create Customer" />

    <!-- Display success or error message -->
    <p v-if="message">{{ message }}</p>
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
    const customerAddress = ref<string>('');
    const message = ref<string>(''); // To display success/error messages

    const submitForm = async () => {
      const customer: Customer = {
        id: 0,
        name: customerName.value,
        email: customerEmail.value,
        address: customerAddress.value,
      };

      try {
        const response = await axios.post(
          'http://localhost:3000/api/customers',
          customer
        );
        message.value = `Customer created successfully: ${response.data.name}`; // Success message

        // Optionally, reset the form fields
        customerName.value = '';
        customerEmail.value = '';
        customerAddress.value = '';
      } catch (error: unknown) {
        // Type assertion to access the response safely
        if (axios.isAxiosError(error)) {
          // If it's an Axios error
          message.value =
            'Error creating customer: ' +
            (error.response?.data.message || error.message); // Display Axios error message
        } else {
          // General error handling
          message.value =
            'An unexpected error occurred: ' + (error as Error).message;
        }
        console.error('Error creating customer:', error); // Log the error
      }
    };

    return {
      customerName,
      customerEmail,
      customerAddress,
      message,
      submitForm,
    };
  },
});
</script>
