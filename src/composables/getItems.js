import { ref } from 'vue';

const getItems = () => {
    const items = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:4000/api/items')
            if(!data.ok){
                throw Error('No data available')
            // console.log(data)
            }
            items.value = await data.json()
        } 
        catch (err) {
            error.value = err.message
        }
    }

    return { items, error, load }
}

export default getItems