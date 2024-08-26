import React from 'react'

const Search = ({ searchedArray,addToCart }) => {
    return (
        <div>
            <div className="search">

                <div className='flex'>{searchedArray.map((vegeItem, vegeIndex) => {
                    return (
                        <div key={vegeIndex} style={{ width: '25%' }}>
                            <div className='product-item prod-bord'><img src={vegeItem.url} style={{ width: '100%', height: '220px' }} />
                                <p style={{ fontWeight: '500', marginBottom: '10px' }}>{vegeItem.name} {vegeItem.amt}</p>
                                <p style={{ marginBottom: '10px' }}> Rs:{vegeItem.price}/-</p>
                                <button className='add' onClick={()=>addToCart(vegeItem)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })}

                </div>

            </div>
        </div>
    )
}

export default Search
