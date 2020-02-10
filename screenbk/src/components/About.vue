<template>
    <div class="hello">
        
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    
    <router-link to="/">
        <el-button icon="el-icon-d-arrow-left">back</el-button>
    </router-link>
    <el-button type="primary" @click="tovue">Powered By Vue</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"Powered By Steven12138"
        }
    },
    methods: {
        tovue(){
            console.log('get')
            this.$router.push('/vue')
        }
    },
}
</script>
<style scope>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>