<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/add">Add</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  text-align: center;
  color: #0076ec;
}

nav {
  padding: 30px;
  background-color: rgb(180, 180, 180);
}

nav a {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>