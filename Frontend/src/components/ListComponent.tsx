
interface ItemValue {
    item: {
        id: number
    }
}

const ListComponent = ({ item }: ItemValue) => {
    return (
        <>
        <h1>{item.id}</h1>
        </>
    )
}

export default ListComponent