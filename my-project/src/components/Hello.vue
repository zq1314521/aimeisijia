<template>
  <div class="hello">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" name="logform">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" name="usename" placeholder="请输入您的用户"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formInline.user" name="pwd" placeholder="请输入您的密码"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="onSubmit">登陆</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {login} from '../vuex/actions/useraction';

export default {
  name: 'hello',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit:function(e){
        login(logform,this);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
