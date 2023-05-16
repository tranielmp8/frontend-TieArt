<template>
    <div>
        <div v-if="error" >{{ error }}</div>
        <div v-if="item" >
            <h2>{{ item.title }}</h2>
            <img :src="item.artImage" alt="">
            <p>{{ item.description }}</p>
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

</style>