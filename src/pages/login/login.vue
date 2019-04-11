
<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.pwd"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="记住密码">
        <el-switch v-model="form.rem_name_pwd"></el-switch>
      </el-form-item>
      <el-button
        @click="submit"
        style="width:100%"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: 'admin',
        pwd: '123456',
        code: '1234',
        rem_name_pwd: true
      }
    }
  },
  components: {},
  methods: {
    submit () {
      window.location.href = 'index.html'
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 600px;
  border: 0 solid #546461;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
