<template>
    <div class="timeline">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="timeline-item"
        :style="{ height: calculateHeight(activity) }"
      >
        <p>{{ activity.name }}</p>
        <p>{{ activity.startTime }} - {{ activity.endTime }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["activities"],
    methods: {
      calculateHeight(activity) {
        const start = new Date(`1970-01-01T${activity.startTime}`);
        const end = new Date(`1970-01-01T${activity.endTime}`);
        const duration = (end - start) / (1000 * 60); // Minutes
        return `${duration * 2}px`; // Scale factor
      },
    },
  };
  </script>
  
  <style>
  .timeline {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 10px;
    border-left: 3px solid #007aff;
  }
  
  .timeline-item {
    position: relative;
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .timeline-item p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  </style>
  