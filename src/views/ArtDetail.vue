<template>
    <div class="item">
        <div v-if="error" >{{ error }}</div>
        <div v-if="item" >
            <h2>{{ item.title }}</h2>
            <img :src="item.artImage" alt="">
            <p class="description">{{ item.description }}</p>
        </div>
        
    </div>
</template>

<script >
import getItem from '../composables/getItem';
    export default{
    props: ["id"],
    setup(props) {
        const { item, error, load } = getItem(props.id)

        load()

        return {item, error}
    },
}
  

</script>

<style scoped>

img {
    border-radius: 7px;
    width: 300px;
}

.item {
    padding: 10px;
}
.description {
    font-size: 20px;
    margin-bottom: 10px;
}

</style>