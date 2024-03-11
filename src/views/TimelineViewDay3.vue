<template>
  <div class="timeline">
    <div class="container">
      <h1 class="text-center">DAY 3</h1>
      <p class="text-center">
        <router-link class="prev" :to="{ name: 'timeline_day2' }">PREV</router-link>
        <router-link :to="{ name: 'timeline_day4' }">NEXT</router-link>
      </p>
      <div class="row pt-5">
        <div class="col-6">
          <div class="action">
            <div class="avatar3 tribute2-male killer"></div>
            <img class="fight" src="../assets/images/oriental.png" alt="" style="width: 50px">
            <div class="avatar3 tribute3-male killed"></div>
            <div class="avatar3 tribute11-female killed"></div>
          </div>
          <div class="action mt-4">
            <div class="avatar3 tribute12-female killer"></div>
            <img class="fight" src="../assets/images/oriental.png" alt="" style="width: 50px">
            <div class="avatar3 tribute1-male killed"></div>
          </div>
        </div>
        <div class="col-6">
          <table>
            <tr class="text-center">
              <td>
                <div class="avatar3 tribute1-male killed"></div>
                <p class="tribute-name text-center">District 1</p>
              </td>
              <td>
                <div class="avatar3 tribute1-female killed"></div>
                <p class="tribute-name text-center">District 1</p>
              </td>
              <td>
                <div class="avatar3 tribute2-male"></div>
                <p class="tribute-name text-center">District 2</p>
              </td>
              <td>
                <div class="avatar3 tribute2-female"></div>
                <p class="tribute-name text-center">District 2</p>
              </td>
              <td>
                <div class="avatar3 tribute3-male killed"></div>
                <p class="tribute-name text-center">District 3</p>
              </td>
              <td>
                <div class="avatar3 tribute3-female killed"></div>
                <p class="tribute-name text-center">District 3</p>
              </td>
            </tr>
            <tr class="text-center">
              <td>
                <div class="avatar2 tribute4-male killed"></div>
                <p class="tribute-name text-center">District 4</p>
              </td>
              <td>
                <div class="avatar2 tribute4-female killed"></div>
                <p class="tribute-name text-center">District 4</p>
              </td>
              <td>
                <div class="avatar2 tribute5-male killed"></div>
                <p class="tribute-name text-center">District 5</p>
              </td>
              <td>
                <div class="avatar2 tribute5-female"></div>
                <p class="tribute-name text-center">District 5</p>
              </td>
              <td>
                <div class="avatar2 tribute6-male killed"></div>
                <p class="tribute-name text-center">District 6</p>
              </td>
              <td>
                <div class="avatar2 tribute6-female killed"></div>
                <p class="tribute-name text-center">District 6</p>
              </td>
            </tr>
            <tr class="text-center">
              <td>
                <div class="avatar2 tribute7-male killed"></div>
                <p class="tribute-name text-center">District 7</p>
              </td>
              <td>
                <div class="avatar2 tribute7-female killed"></div>
                <p class="tribute-name text-center">District 7</p>
              </td>
              <td>
                <div class="avatar2 tribute8-male killed"></div>
                <p class="tribute-name text-center">District 8</p>
              </td>
              <td>
                <div class="avatar2 tribute8-female killed"></div>
                <p class="tribute-name text-center">District 8</p>
              </td>
              <td>
                <div class="avatar2 tribute9-male killed"></div>
                <p class="tribute-name text-center">District 9</p>
              </td>
              <td>
                <div class="avatar2 tribute9-female killed"></div>
                <p class="tribute-name text-center">District 9</p>
              </td>
            </tr>
            <tr class="text-center">
              <td>
                <div class="avatar2 tribute10-male killed"></div>
                <p class="tribute-name text-center">District 10</p>
              </td>
              <td>
                <div class="avatar2 tribute10-female killed"></div>
                <p class="tribute-name text-center">District 10</p>
              </td>
              <td>
                <div class="avatar2 tribute11-male"></div>
                <p class="tribute-name text-center">District 11</p>
              </td>
              <td>
                <div class="avatar2 tribute11-female killed"></div>
                <p class="tribute-name text-center">District 11</p>
              </td>
              <td>
                <div class="avatar2 tribute12-male"></div>
                <p class="tribute-name text-center">District 12</p>
              </td>
              <td>
                <div class="avatar2 tribute12-female"></div>
                <p class="tribute-name text-center">District 12</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TimelineViewDay2',
  components: {}
}
</script>
