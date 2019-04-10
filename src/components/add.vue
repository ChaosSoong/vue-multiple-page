<template>
  <div>
    i am {{ msg }} singlepage
    <router-link to='index.html'>go index.html</router-link>
  </div>
</template>
<script>
export default {
  name: 'add',
  data () {
    return {
      msg: 'add'
    }
  }
}
</script>

<style scoped>
</style>
