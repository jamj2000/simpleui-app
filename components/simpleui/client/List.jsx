'use client'

export const List = ({ data = [], fields = [], card }) => {

    const Card = card

    // console.log("list data", data)

    return <>
        {data.map(item =>
            <Card
                key={item.id}
                item={item}
                fields={fields}
            />
        )}
    </>
}



