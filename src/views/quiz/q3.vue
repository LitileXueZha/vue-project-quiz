<template>
    <div>
        <h2>flex布局，由某个最高高度的元素撑开，其它元素高度自适应</h2>
        <div class="container">
            <div class="block" style="background: blue;">模块1<br></div>
            <div class="block" style="background: red;">模块2</div>
            <div class="block" style="background: yellow;height: 150px;">模块3<br><br><br></div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;

    .block {
        display: inline-block;
        width: 100px;
    }
}
</style>