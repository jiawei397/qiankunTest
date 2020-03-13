<template>
  <div class="home">
    <header>
      <h1>This is a child home page</h1>
    </header>
    <section>
      <div>
        <label>请输入：</label>
        <input type="text" v-model="data"/>
      </div>
      <div class="output">{{data}}</div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  }
}
</script>
<style scoped>
  .home {
    text-align: center;
  }

  .output {
    width: 200px;
    height: 200px;
    margin: 20px auto;
    border: 1px solid rebeccapurple;
  }
</style>
