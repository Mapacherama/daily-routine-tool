<template>
  <div id="app" class="container">
    <header class="header">
      <h1>Daily Routine Builder</h1>
      <p>Plan your perfect day with ease!</p>
    </header>

    <main class="main">
      <p class="instruction">Start building your daily routine:</p>
      <div class="button-group">
        <button class="button primary" @click="createRoutine">Create New Routine</button>
        <button class="button secondary" @click="loadRoutine">Load Saved Routine</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    createRoutine() {
      // Navigate to the routine creation page (placeholder for now)
      alert("Navigating to the routine creation page...");
    },
    loadRoutine() {
      // Load a saved routine from localStorage (placeholder for now)
      alert("Loading a saved routine...");
    },
  },
};
</script>

<style>
/* General Reset */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

.routine-builder {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.activity-list {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.activity-item {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

/* Header */
.header {
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0;
  color: #2c3e50;
}

.header p {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #7f8c8d;
}

/* Main Section */
.main {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.instruction {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #555;
}

/* Button Group */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button {
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Primary Button */
.button.primary {
  background-color: #3498db;
  color: #fff;
}

.button.primary:hover {
  background-color: #2980b9;
}

/* Secondary Button */
.button.secondary {
  background-color: #ecf0f1;
  color: #333;
}

.button.secondary:hover {
  background-color: #bdc3c7;
}
</style>
