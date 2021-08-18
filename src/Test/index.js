import React,{useState} from 'react'

const Test = () => {
    const [node, setNode] = useState({1: {
        level:1,
        id: 1,
        parentId: null,
        childrenIds: [2],
        name: "Parent1",
        },
        2: {
        level:2,
        id: 2,
        parentId: 1,
        childrenIds: [3],
        name: "Child1",
        }})

        const add = (val) =>{
            if(val.parentId)
            setNode(prevState => [...prevState,node])
        }
    return (
        <div>
            
        </div>
    )
}

export default Test;
