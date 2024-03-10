import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TributesView from '../views/TributesView.vue'
import TimelineViewDay1 from "@/views/TimelineViewDay1.vue";
import TimelineViewDay2 from "@/views/TimelineViewDay2.vue";
import TimelineViewDay3 from "@/views/TimelineViewDay3.vue";
import TimelineViewDay4 from "@/views/TimelineViewDay4.vue";
import TimelineViewDay5 from "@/views/TimelineViewDay5.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tributes',
    name: 'tributes',
    component: TributesView
  },
  {
    path: '/timeline',
    children: [
      { path: 'day1', component: TimelineViewDay1, name: "timeline_day1"},
      { path: 'day2', component: TimelineViewDay2, name: "timeline_day2"},
      { path: 'day3', component: TimelineViewDay3, name: "timeline_day3"},
      { path: 'day4', component: TimelineViewDay4, name: "timeline_day4"},
      { path: 'day5', component: TimelineViewDay5, name: "timeline_day5"},
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
