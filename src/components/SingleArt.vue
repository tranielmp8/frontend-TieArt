<template>
    <div>
        
            <div class="card" >
                <img :src="item.artImage" alt="tie art">
                <div class="card-body">
                    <h2 class="card-title" > {{item.title}} </h2>
                    <p class="card-info"> {{ item.description }} </p>
                    <button class="card-btn" >
                        <router-link :to="{ name: 'artdetail', params: { id: item._id}}" >
                            <p>View Full Picture</p>
                        </router-link>
                    </button>
                </div>               
            </div>
              
    </div>
</template>

<script>

export default {
    props: ["item"],
    setup() {
        return {};
    },
}
</script>

<style scoped>
h1{
    text-align: center;
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

@media screen and (max-width: 670px){

    .card{
        width: 300px;
        height: 350px;
    }
}

</style>