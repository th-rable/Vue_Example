<template>
    <div class="menu">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Login</a>
    </div>
</template>
<script>
    export default{
        name: 'NavbarComponent',
    }

</script>

<style>
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>