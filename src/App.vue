<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      this.$axios({
        method:'GET',
        url:'/userinfo'
      }).then(res =>{
        if(res.data.code == 0){
          this.$store.dispatch('recordUser',res.data.data)
        }
      })
    }
  }
}
</script>

<style>

</style>
