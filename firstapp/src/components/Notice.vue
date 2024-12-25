<template lang="ko">
    <div class="notice">
        <a>{{text}}</a>
    </div>
</template>
<script>
    export default {
        name:'NoticeComponent',
        props:{
            text:String,
        }
    }
</script>
<style>
.notice{
  background: gray;
  padding: 10px;
  border-radius: 5px;
}
.notice a{
  color: white;
  padding: 5px;
}
</style>