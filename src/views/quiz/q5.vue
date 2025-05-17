<template>
    <div>
        <CustomPassword v-model:value="password" :len="6"/>
        <p>{{ password }}</p>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import CustomPassword from './CustomPassword.vue';
var password = ref('');
</script>