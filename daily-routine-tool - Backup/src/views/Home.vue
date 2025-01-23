<template>
    <div id="app" class="container">
      <header class="header">
        <h1>Daily Routine Builder</h1>
        <p>Plan your perfect day with ease!</p>
      </header>
  
      <main class="main">
        <p class="instruction">Start building your daily routine:</p>
        <div class="button-group">
          <router-link to="/routine-builder">
            <button class="button primary">Create New Routine</button>
          </router-link>
          <button class="button secondary" @click="loadRoutine">Load Saved Routine</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: "App",
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      createRoutine() {
        // Navigate to the routine creation page (placeholder for now)
        console.log("Creating a new routine...");
      },
      loadRoutine() {
        // Load a saved routine from localStorage (placeholder for now)
        alert("Loading a saved routine...");
      },
    },
  };
  </script>
  