import React from 'react'
import "./FeaturedProduct.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
const FeaturedProduct = ({type}) => {

    const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
  return (
    <div className='featuredProduct'>
        <div className="top">
            <h1>{type}Products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nisi beatae officia unde labore quo ducimus pariatur atque, 
                sequi omnis possimus ad, animi harum cupiditate perspiciatis 
                maiores qui alias reprehenderit tempore.
            </p>
        </div>
        <div className="bottom">
            {error 
            ? "Someting went wrong!" 
            : loading 
            ? "loading"
            : data?.map((item) =>
                <Card item={item} key={item.id}/>
            )}
        </div>
    </div>
  )
}

export default FeaturedProduct

/*
try data

    const data =[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Graphic T-shirt",
            IsNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            IsNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Skirt",
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            oldPrice:19,
            price:12,
        },
    ]
*/