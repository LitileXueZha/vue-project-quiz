<template>
    <pre><code>
    function myRequest(url, data) {
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data,
                success:resolve,
                fail:reject,
            })
        })
    }
    // 使用示例
    var res = await myRequest('test', {test: 'test'});
    console.log(res);
    </code></pre>
</template>

<script setup>
function myRequest(url, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            data,
            success:resolve,
            fail:reject,
        })
    })
}
</script>