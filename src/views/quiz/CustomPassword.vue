<template>
    <div class="inputs">
        <input class="pwd" type="password" @input="onInput" @keyup.delete="onDelete" v-for="n in len" maxlength="1">
    </div>
</template>
<script setup>
var password = defineModel('value', {default: ''});
var len = defineModel('len');
function onInput(e) {
    if (e.target.value === '') {        
        password.value = password.value.slice(0, -1);
        return;
    }
    
    var n = parseInt(e.target.value);
    if (isNaN(n)) {
        e.target.value = '';
        return;
    }
    e.target.nextElementSibling?.focus();
    password.value += e.target.value;
    
}
function onDelete(e) {
    e.target.previousElementSibling?.focus();
    // e.target.value = '';
}
</script>
<style>
.inputs .pwd {
    margin-left: -1px;
    outline: none;
    border: 1px solid;
    width: 32px;
    line-height: 32px;
    appearance: none;
    text-align: center;
}
input::-ms-reveal {
    display: none;
}
</style>