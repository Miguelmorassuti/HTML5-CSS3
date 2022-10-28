import Item from './Item'

function list(){
    return(
        <> 
            <h1>My list</h1>
            <ul>
                <Item marca="Ford" ano={1900} />
                <Item marca="Mercedes" ano={1928} />
            </ul>
        </>
    )
}

export default list