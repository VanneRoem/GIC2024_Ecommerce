<template>
    <div class="container">
        <div class="sidebar">
            <h1>Menu</h1>
            <ul>
                <li><a href="#">Section1</a></li>
                <li><a href="#">Section2</a></li>
                <li><a href="#">Section3</a></li>
                <li><a href="#">Section4</a></li>
            </ul>
        </div>
        <div class="content">
            <p>Welcome to Page 2</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
</style>