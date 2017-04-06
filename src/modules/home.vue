<template>
<div id="home">
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <router-link to='/' class="navbar-brand">Algorithm Day by Day</router-link>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><router-link to='/'>Home</router-link></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="https://github.com/algorithmdaybyday/web"> Github </a></li>
            <li><a href="#"> Login</a></li>
        </ul>
    </div>
</nav>
<h2>{{msg}}</h2>
</div>
</template>

<script>
export default {
    data(){
        return {
            msg: "welcome to algorithmdaybyday"
        }
    }
}

</script>

<style scoped>

</style>