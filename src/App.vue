<template>
  <div class="container">
      <div id="progress-bar"></div>
      <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <router-link :to="{name: 'Home'}" class="nav-link">
                      Home
                  </router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{name: 'About'}" class="nav-link">
                      About
                  </router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{name: 'Contact'}" class="nav-link">
                      Contact
                  </router-link>
              </li>
          </ul>
      </nav>
      <div class="content mt-3">
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #progress-bar {
        height: 10px;
        margin-top: 10px;
    }
</style>