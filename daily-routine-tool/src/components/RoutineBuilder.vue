<template>
    <div class="routine-builder">
        <h1>Build Your Routine</h1>
        <div>
            <form @submit.prevent="addActivity">
                <label for="task">Activity Name:</label>
                <input id="task" v-model="newActivity.name" required />

                <label for="start-time">Start Time:</label>
                <input id="start-time" type="time" v-model="newActivity.startTime" required />

                <label for="end-time">End Time:</label>
                <input id="end-time" type="time" v-model="newActivity.endTime" required />

                <button type="submit">Add Activity</button>
            </form>
        </div>

        <ul>
            <li v-for="(activity, index) in activities" :key="index">
                {{ activity.name }} ({{ activity.startTime }} - {{ activity.endTime }})
                <button @click="removeActivity(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
            this.saveRoutine();
        },
        removeActivity(index) {
            this.activities.splice(index, 1);
            this.saveRoutine();
        },
        saveRoutine() {
            localStorage.setItem("dailyRoutine", JSON.stringify(this.activities));
        },
        loadRoutine() {
            const savedRoutine = localStorage.getItem("dailyRoutine");
            if (savedRoutine) {
                this.activities = JSON.parse(savedRoutine);
            }
        },
    },
    mounted() {
        this.loadRoutine();
    },
};
</script>

<style>
/* Simple CSS for form and list styling */
.routine-builder {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button {
    padding: 8px 12px;
    cursor: pointer;
}
</style>