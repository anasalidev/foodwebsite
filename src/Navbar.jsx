import React from 'react'

const Navbar = ({ filterItem, catItem }) => {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around ">
                    {
                        catItem.map((curElems) => {
                            return <button className='btn btn-warning' onClick={() => filterItem(curElems)} > {curElems} </button>

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
