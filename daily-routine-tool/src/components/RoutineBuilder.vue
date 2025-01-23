<template>
    <div class="routine-builder">
      <h1>Build Your Routine</h1>
      
      <!-- Form for Adding Activities -->
      <form @submit.prevent="addActivity" class="form">
        <label for="task">Activity Name:</label>
        <input id="task" v-model="newActivity.name" required />
        
        <label for="start-time">Start Time:</label>
        <input id="start-time" type="time" v-model="newActivity.startTime" required />
        
        <label for="end-time">End Time:</label>
        <input id="end-time" type="time" v-model="newActivity.endTime" required />
        
        <button type="submit">Add Activity</button>
      </form>
      
      <!-- Draggable List of Activities -->
      <draggable v-model="activities" class="activity-list">
        <div v-for="(activity, index) in activities" :key="index" class="activity-item">
          <p>{{ activity.name }} ({{ activity.startTime }} - {{ activity.endTime }})</p>
          <button @click="removeActivity(index)">Remove</button>
        </div>
      </draggable>
    </div>
  </template>
  
  <script>
  import draggable from "vuedraggable";
  
  export default {
    components: { draggable },
    data() {
      return {
        newActivity: { name: "", startTime: "", endTime: "" },
        activities: [],
      };
    },
    methods: {
      addActivity() {
        this.activities.push({ ...this.newActivity });
        this.newActivity = { name: "", startTime: "", endTime: "" };
      },
      removeActivity(index) {
        this.activities.splice(index, 1);
      },
    },
  };
  </script>
  
  <style>
  /* Basic styling */
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
  
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  