<template>
    <div>
        <nav>
            <router-link to="/">
            <h2 class="logo">John <span>Doe</span></h2>
            </router-link>
            <ul>
                <li><router-link class="route-link" to="/">Home</router-link></li>
                <li><router-link class="route-link" to="/about">About</router-link></li>
                <!-- <li><router-link class="route-link" to="#" >Service</router-link></li>
                <li><router-link class="route-link" to="#" >Portfolio</router-link></li>
                <li><router-link class="route-link" to="#" >Contact Me</router-link></li> -->
            </ul>
            <button type="button" >Subscribe</button>
        </nav>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 30px 20px 20px 0;
}

.logo {
    color: white;
    font-size: 28px;
}

span {
    color: #ea1538;
}

ul li{
    display: inline-block;
    padding: 10px 20px;
    border-right: #ea1538 solid 2px;
}

.route-link {
    color: white;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}

.route-link:hover {
    color: #ea1538;
    transition: .3s;
}

button {
    border: none;
    background: #ea1538;
    padding: 12px 30px;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-size: 15px;
    transition: .4s;
}

button:hover {
    transform: scale(1.3);
    cursor: pointer;
}

@media screen and (max-width: 670px) {
    nav {
        flex-direction: column;
    }

    .logo{
        margin-bottom: 15px;
    }

    button {
        margin-top: 15px;
    }

    
}
</style>