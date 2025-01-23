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
    <draggable v-model="activities" item-key="id" class="activity-list">
      <template #item="{ element, index }">
        <div class="activity-item">
          <p>{{ element.name }} ({{ element.startTime }} - {{ element.endTime }})</p>
          <button @click="removeActivity(index)">Remove</button>
        </div>
      </template>
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
      activities: [
        { id: 1, name: "Morning Exercise", startTime: "06:00", endTime: "07:00" },
        { id: 2, name: "Breakfast", startTime: "07:00", endTime: "07:30" },
        { id: 3, name: "Work", startTime: "08:00", endTime: "12:00" },
        { id: 4, name: "Lunch", startTime: "12:00", endTime: "12:30" },
        { id: 5, name: "Work", startTime: "12:30", endTime: "17:00" },
        { id: 6, name: "Dinner", startTime: "17:00", endTime: "17:30" },
        { id: 7, name: "Evening Exercise", startTime: "17:30", endTime: "18:30" },
        { id: 8, name: "Relax", startTime: "18:30", endTime: "20:00" },
        { id: 9, name: "Sleep", startTime: "20:00", endTime: "22:00" },
      ],
    };
  },
  methods: {
    addActivity() {
      const id = new Date().getTime(); // Unique ID for each activity
      this.activities.push({ id, ...this.newActivity });
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
