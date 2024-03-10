<template>
  <header>
    <ul class="nav flex justify-content-center pt-3">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'tributes' }">Tributes</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'timeline_day1' }">Timeline</router-link>
      </li>
    </ul>
  </header>
    <router-view/>
</template>

<script>
// @ is an alias to /src
import "./assets/main.css"

export default {
  components: {
  }
}
</script>
