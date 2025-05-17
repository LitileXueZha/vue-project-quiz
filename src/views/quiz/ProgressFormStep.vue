<template>
    <div  v-show="visible"><slot/></div>
</template>
<script setup>
import {inject,ref,watch} from 'vue';
var props = defineProps(['title','fields']);
var steps = inject('steps');
var idx = steps.value.length;
steps.value.push(props);
var step = inject('step');
var visible = ref(idx === 0);
watch(step, () => {    
    visible.value = idx === step.value;
});
</script>