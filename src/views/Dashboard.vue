<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="events !== 'Loading events...'">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading Events
    </p>
  </div>
</template>

<script>
import axios from "axios";
import EventCard from "../components/EventCard";
export default {
  components: { EventCard },

  data() {
    return { events: "Loading events..." };
  },
  created() {
    axios.get("//localhost:5000/dashboard").then(({ data }) => {
      this.events = data.events.events;
    });
  }
};
</script>
