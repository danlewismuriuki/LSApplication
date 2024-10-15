<template>
  <div>
    <h1>Create Customer</h1>
    <CustomerForm @customer-added="handleCustomerAdded" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomerForm from '../components/CustomerForm.vue'; // Adjust the path if necessary
import { Customer } from '../types/index'; // Import the Customer type

export default defineComponent({
  components: {
    CustomerForm,
  },
  methods: {
    handleCustomerAdded(customer: Customer) {
      // Specify the type of customer
      // Handle the event when a customer is added
      console.log('New customer added:', customer);
      // You can implement further logic here, like showing a success message
    },
  },
});
</script>

<style scoped>
/* Add any styles for the CustomerPage here */
</style>
