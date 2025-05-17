<template>
    <div>
        <ProgressForm color="green">
            <ProgressFormStep title="用户名" fields="usr">
                <label>用户名:</label>
                <input type="text" name="usr" placeholder="请输入用户名">
            </ProgressFormStep>
            <ProgressFormStep title="手机号" fields="phone">
                <label>手机号:</label>
                <input type="text" name="phone" placeholder="请输入手机号">
            </ProgressFormStep>
            <ProgressFormStep title="密码" fields="pwd">
                <label>密码:</label>
                <input type="password" name="pwd" placeholder="请输入密码">
            </ProgressFormStep>
        </ProgressForm>
    </div>
</template>
<script setup>
import ProgressForm from './ProgressForm.vue';
import ProgressFormStep from './ProgressFormStep.vue';
</script>