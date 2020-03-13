<template>
  <div id="root">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/A">Child1</router-link> |
      <router-link to="/B">Child2</router-link>
      <!--<a href="/demo">demo</a>-->
    </div>
    <div v-show="content" v-html="content">

    </div>
    <router-view v-show="!content"/>
  </div>
</template>
<script>
export default {
  name: 'root',
  props: {
    loading: Boolean,
    content: String
  }
}
</script>

<style lang="stylus">
#root
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
