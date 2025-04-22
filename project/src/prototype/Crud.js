import React, { useRef,useState } from 'react';

const Crud = () => {

    const list = [
        {
            id : 1,
            name : "HP",
            price : "2222",
            memory : "500gb"
        },
        {
            id : 2,
            name : "Dell",
            price : "1111",
            memory : "256gb"
        },
        {
            id : 3,
            name : "Lenovo",
            price : "1555",
            memory : "256gb"
        }
    ]
    //create a state using a use state hook
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)

    return(
        <div className='crud'>
            <div>
            <AddList setList= {setList}></AddList>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.price}</td>
                            <td>{current.memory}</td> 

                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id){
        setUpdateState(id)
    }

    function handleDelete(id){
        const newList = lists.filter((li) => li.id !==id)
        setList(newList)
    }

    function handleSubmit(event){
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const memory = event.target.elements.memory.value

        const newList = lists.map((li) => (
            li.id === updateState ? { ...li, name:name, price:price, memory:memory} : li
        ))

        setList(newList)
        setUpdateState(-1) 
    }
    
}


const EditList = ({current, lists, setList}) =>{
    const handInputname= (event) =>{
        const value = event.target.value;
        const newList = lists.map((li) => (
            li.id === current.id ? { ...li, name:value} : li
        ))

        setList(newList)
    }

    const handInputprice= (event) =>{
        const value = event.target.value;
        const newList = lists.map((li) => (
            li.id === current.id ? { ...li, price:value} : li
        ))

        setList(newList)
    }

    const handInputmemory= (event) =>{
        const value = event.target.value;
        const newList = lists.map((li) => (
            li.id === current.id ? { ...li, memory:value} : li
        ))

        setList(newList)
    }
    return(
        <tr>
            <td><input type='text' onChange={handInputname} name='name' value={current.name} lists={lists} setList={setList} /></td>
            <td><input type='text' onChange={handInputprice} name='price' value={current.price} lists={lists} setList={setList}/></td>
            <td><input type='text' onChange={handInputmemory} name='memory' value={current.memory} lists={lists} setList={setList}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

const AddList = ({setList}) => {

    const nameRef = useRef()
    const priceRef = useRef()
    const memoryRef = useRef()

    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const memory = event.target.elements.memory.value;

        const newList = {
            id : 4,
            name,
            price,
            memory
        }

setList((prevList)=>{
    return prevList.concat(newList)
})
nameRef.current.value = ""
priceRef.current.value = ""
memoryRef.current.value = ""
    }
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
            <input type="text" name="memory" placeholder="Enter Memory" ref={memoryRef}/>

            <button type="submit"> Add</button>

        </form>
    )
}


export default Crud