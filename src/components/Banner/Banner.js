import React, { useEffect, useState } from 'react';
import ShowBanner from './showBanner';
import Store from './Store';

const Banner = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const addedItem=[];
    
    const handleClick=(e)=>{
        console.log(e);
        addedItem.push(e);
        setSelectedProducts(addedItem)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        products.map(product => <ShowBanner product={product} handleClick={handleClick} />)
                    }
                </div>
                </div>
                <div  className='col col-md-6'>
                    {
                        selectedProducts?.map(selectedProduct=><Store selectedProduct={selectedProduct}/>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Banner;