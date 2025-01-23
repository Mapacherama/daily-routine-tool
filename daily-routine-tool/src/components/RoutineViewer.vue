<template>
    <div class="routine-viewer">
      <h2>Your Routine</h2>
      <div v-if="routine && routine.length > 0" class="routine-list">
        <div v-for="(activity, index) in routine" :key="activity.id" class="routine-item">
          <p class="activity-name">{{ activity.name }}</p>
          <p class="activity-time">{{ activity.startTime }} - {{ activity.endTime }}</p>
        </div>
      </div>
      <p v-else class="no-routine-message">No routine available to display.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      routine: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .routine-viewer {
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
    font-weight: bold;
  }
  
  .routine-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .routine-item {
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .activity-name {
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }
  
  .activity-time {
    font-size: 14px;
    color: #888;
  }
  
  .no-routine-message {
    font-size: 14px;
    color: #888;
    text-align: center;
  }
  </style>
  