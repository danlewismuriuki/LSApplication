<!-- Layout.vue -->
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <slot></slot>
    <!-- This allows other components to be rendered here -->
  </div>
</template>
