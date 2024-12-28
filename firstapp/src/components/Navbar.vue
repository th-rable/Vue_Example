<template>
    <div class="menu">
        <router-link to="/">Team수능</router-link>
    </div>
</template>
<script>
    export default{
        name: 'NavbarComponent',
    }

</script>

<style>
.menu{
  background: slateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>