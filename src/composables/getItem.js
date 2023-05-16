import { ref } from 'vue';

const getItem = (id) => {
    const item = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:4000/api/items/' + id)
            if(!data.ok){
                throw Error('No item available')
            // console.log(data)
            }
            item.value = await data.json()
        } 
        catch (error) {
            error.value = err.message
        }
    }

    return { item, error, load }
}

export default getItem