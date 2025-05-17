<template>
    <div>
        <div class="wrapper" :class="`c${n}`" v-for="n in 3">
            <div class="block">{{ n }}</div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    border: 1px solid black;
    height: 150px;

    .block {
        width: 50px;
        height: 50px;
        background: gray;
    }
}
/* flex 布局居中 */
.c1 {
    display: flex;
    place-items: center;
}
/* 绝对定位 + transform */
.c2 {
    position: relative;
    .block {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
/* 构造 IFC + 垂直居中 */
.c3 .block {
    display: inline-block;
    vertical-align: middle;
}
.c3::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
</style>