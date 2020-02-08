<template>
    <div class="hello">
        
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <!-- <el-button type="primary" @click="tovue">Powered By Vue</el-button> -->
    <p @click="tovue" >test</p>
    </div>
</template>
<script>
import router from './router'
export default {
    data(){
        return{
            msg:"Powered By Steven12138"
        }
    },
    methods: {
        tovue(){
            console.log('get')
            router.push('/vue')
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