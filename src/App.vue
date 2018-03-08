<template>
  <div>
    <span class="inline">1</span>
    <span class="inline">2</span>
    <span class="inline">2</span>
    <span class="inline">34</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    s () {
    }
  },
  mounted () {
    console.log('mounted!')
  }
}
// this is a conflict commit !
// this is verson 1.0 plu
</script>

<style>
.inline{
  background-color: #ccc;
}
</style>
