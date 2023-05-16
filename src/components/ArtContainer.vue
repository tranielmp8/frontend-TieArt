<template>
    <div>
        <h1 class="art-header">Home Page</h1>
        <div class="card-container">
            <div v-for="item in items" :key="item.id" >
                <SingleArt :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
import SingleArt from './SingleArt.vue';
import getItems from '../composables/getItems';
export default {
    components: {SingleArt},
    setup() {
        const { items, load, error } = getItems()

        load()

        return {items, error}

    }
}
</script>

<style scoped >
h1{
    text-align: center;
}

.card-container {
    padding: 3rem;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
.card{
    width: 400px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    border: 8px solid black;
    position: relative;
}
.card > img {
    width: 100%;
    object-fit: cover;
}

.card-body{
    width: 100%;
    height: 100%;
    top: 0;
    right: -100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 1s;
}

.card:hover .card-body {
    right: 0;
}

.card-title {
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 500;
}

.card-sub-title {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 300;
}

.card-info {
    font-size: 16px;
    line-height: 25px;
    margin: 40px 0;
    font-weight: 400;
    
}

.card-btn {
    color: #555;
    background: #999;
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: capitalize;
    border: none;
    outline: none;
    font-weight: 500;
    cursor: pointer;
    width: 120px;
}
</style>