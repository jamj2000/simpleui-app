// import { Card } from "."

export const List2 = ({ data = [], renderCard }) => {


    // console.log("list data", data)

    return <>
        {/* {data.map(item =>
            <Card
                key={item.id}
                item={item}
                fields={fields}
            />
        )} */}
        {data.map(renderCard)}
    </>
}