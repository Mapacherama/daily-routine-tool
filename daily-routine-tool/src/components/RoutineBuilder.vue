<template>
  <div class="routine-builder">
    <h1>Build Your Routine</h1>

    <!-- Form for Adding Activities -->
    <form @submit.prevent="addActivity" class="form">
      <label for="task">Activity Name:</label>
      <input id="task" v-model="newActivity.name" placeholder="e.g., Morning Yoga" required />

      <label for="start-time">Start Time:</label>
      <input id="start-time" type="time" v-model="newActivity.startTime" required />

      <label for="end-time">End Time:</label>
      <input id="end-time" type="time" v-model="newActivity.endTime" required />

      <button type="submit" class="button primary">Add Activity</button>
    </form>

    <!-- Draggable List -->
    <draggable
      v-model="activities"
      item-key="id"
      class="activity-list"
      :move="onMove"
    >
      <template #item="{ element, index }">
        <div class="activity-item">
          <p class="activity-text">
            <span class="activity-name">{{ element.name }}</span>
            <span class="activity-time">{{ element.startTime }} - {{ element.endTime }}</span>
          </p>
          <button @click="removeActivity(index)" class="button secondary">Remove</button>
        </div>
      </template>
    </draggable>

    <!-- Timeline View -->
    <TimelineView :activities="activities" />

    <!-- Save/Load Buttons -->
    <div class="routine-actions">
      <button @click="saveRoutine" class="button primary">Save Routine</button>
      <button @click="loadRoutine" class="button secondary">Load Routine</button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TimelineView from "@/components/TimelineView.vue";

export default {
  components: { draggable, TimelineView },
  data() {
    return {
      newActivity: { name: "", startTime: "", endTime: "" },
      activities: [],
    };
  },
  methods: {
    addActivity() {
      const id = new Date().getTime(); // Unique ID
      this.activities.push({ id, ...this.newActivity });
      this.newActivity = { name: "", startTime: "", endTime: "" };
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    },
    onMove(evt) {
      console.log("Moved item:", evt);
    },
    saveRoutine() {
      localStorage.setItem("dailyRoutine", JSON.stringify(this.activities));
      alert("Routine saved!");
    },
    loadRoutine() {
      const savedRoutine = localStorage.getItem("dailyRoutine");
      if (savedRoutine) {
        this.activities = JSON.parse(savedRoutine);
      } else {
        alert("No routine found to load.");
      }
    },
  },
};
</script>

<style>
/* General Styling */
.routine-builder {
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

label {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  color: #555;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007aff;
}

.button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button.primary {
  background-color: #007aff;
  color: white;
}

.button.primary:hover {
  background-color: #005bb5;
}

.button.secondary {
  background-color: #f5f5f5;
  color: #333;
}

.button.secondary:hover {
  background-color: #ddd;
}

/* Draggable List */
.activity-list {
  margin-top: 20px;
  padding: 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
  transition: background-color 0.2s;
}

.activity-item:hover {
  background-color: #f0f0f0;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-text {
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  flex-grow: 1;
}

.activity-name {
  font-weight: bold;
  color: #333;
}

.activity-time {
  display: block;
  font-size: 14px;
  color: #888;
  margin-top: 4px;
}

/* Save/Load Buttons */
.routine-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>
