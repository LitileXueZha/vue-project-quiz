<template>
    <nav class="nav-bar">
        <span class="nav-item" :style="step === index && `background:${color};color:#fff`" v-for="(item,index) in steps">{{ index+1 }} {{item.title}}</span>
    </nav>
    <pre v-if="step >= steps.length">{{ JSON.stringify(data,null,2) }}</pre>
    <form v-show="step < steps.length" @submit.prevent="onSubmit">
        <slot></slot>
        <div style="text-align: right;">
            <button type="reset">重置</button>
            <button :style="`background:transparent;color:${color}`" type="button" @click="onPrev" v-if="step > 0">上一步</button>
            <button :style="`background: ${color};color:#fff`">{{ step === steps.length - 1 ? '提交' : '下一步' }}</button>
        </div>
    </form>
</template>
<script setup>
import {ref,getCurrentInstance,provide,defineProps} from 'vue';
defineProps(['color']);
var inst = getCurrentInstance();
var step = ref(0);
var steps = ref([]);
var data = {};
function onSubmit(e) {    
    var fields = steps.value[step.value].fields.split(',');
    for (var k of fields) {
        data[k] = e.target[k].value;
    }
    
    step.value++;
}
function onPrev() {
    step.value--;
}
provide('steps', steps);
provide('step', step);
</script>
<style>
.nav-bar {
    display: flex;
}
.nav-item {
    padding: 1em 2em;
}
</style>