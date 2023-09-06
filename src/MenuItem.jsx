import React from 'react'

const MenuItem = (props) => {
  return (
    <>
       {/*=================== main section is start============== */}
       <div className="menu-items container-fluid mt-5" >
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">


                            {
                                props.items.map((ele) => {
                                    const {id, name, image, description, price } = ele;
                                    return (

                                        <div className="boxs" id='w' key={id}>
                                            <div className="bo" >
                                                <div className="imgbx">
                                                    <img src={image} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h1>{name}</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Possimus voluptates.</p>
                                                    <div className="butn">
                                                        <p>Price : {price}</p>
                                                        <button className='btn btn-primary' >Order Now</button>
                                                    </div>
                                                    <h4>{description}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MenuItem
