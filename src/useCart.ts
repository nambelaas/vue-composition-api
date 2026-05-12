import { ref } from "vue"

interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

const useCart = () => {
    const items = ref<CartItem[]>([])

    const addItem = (item: CartItem) => items.value.push(item)

    const removeItem = (item: CartItem) => {
        const index = items.value.findIndex(i => i.id == item.id)

        items.value.splice(index, 1)
    }

    return {
        items,
        addItem,
        removeItem
    }
}

export default useCart