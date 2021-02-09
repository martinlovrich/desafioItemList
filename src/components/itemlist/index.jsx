import Item from "../item/index";

const ItemList = ({products}) => {
    return (
    <div>
        <ul>
        {products.map((product)=>{
            return <li key={product.id}>{product.name}</li>//<Item key={product.id} product={product}/>;
        })}
        </ul>
    </div>
    )
    
};

export default ItemList;