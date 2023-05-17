import { ref } from 'vue';

const getItem = (id) => {
    const item = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://backend-tieart-production.up.railway.app/api/items/' + id)
            if(!data.ok){
                throw Error('No item available')
            // console.log(data)
            }
            item.value = await data.json()
        } 
        catch (err) {
            error.value = err.message
        }
    }

    return { item, error, load }
}

export default getItem