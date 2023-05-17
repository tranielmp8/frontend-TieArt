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

@media screen and (max-width: 670px){

    .card-container{
        grid-template-columns: 1fr;
    }
}

</style>