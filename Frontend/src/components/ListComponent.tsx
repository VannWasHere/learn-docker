
interface ItemValue {
    item: {
        id: string
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