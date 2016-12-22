<template>
	<div class="mui-login" id="Login">
		<h1 class="mui-logo">微餐</h1>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<input type="text" class="mui-input-clear" placeholder="点击输入账号" data-input-clear="1"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
			<div class="mui-input-row mui-password">
				<input type="password" placeholder="输入密码" maxlength="30" class="mui-input-password" data-input-password="2"><span class="mui-icon mui-icon-eye"></span>
			</div>
			<br>
			<button type="button" class="mui-btn mui-btn-success mui-btn-block">登录</button>
		</form>
		<a href="javascript:;" class="mui-forget-btn mui-h5 mui-block mui-text-center">忘记密码</a>
	</div>
</template>

<script>
export default {

  name: 'login',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>