import {restaurants} from "../assets/data"
import { useState } from "react";

const Body=()=>{
    const [restaurantdata,setrestaurantdata]=useState(restaurants);
    return (<div id="body">
        {console.log(restaurantdata)}
        <div id="topbar">
        <div id="col-two">  
            <h5>SORT BY:</h5>
            <div id="btns">
                <button onClick={()=>{
                    const filteredlist=restaurantdata.filter((res)=>res.info.avgRating>4.2);
                    setrestaurantdata(filteredlist);
                }}>rating</button>
                <button onClick={()=>{
                    const filteredlist=restaurantdata.filter((res)=>res.info.sla.deliveryTime<26);
                    setrestaurantdata(filteredlist);
                }}>time</button>
                <button >price</button>
            </div>
        </div>
        <div id="col-one">
            <input type="search" id="search"></input>
            <input type="button" value="search" id="search-btn"></input>    
            </div>
        </div>
        <div id="catalog">{restaurantdata.map((res)=><Card data={res} key={res.info.id}/>)}</div>
    </div>)
}
const Card=(data)=>{

    return (<div id="card">
        <div id="card-img">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.data.info.cloudinaryImageId}></img>
        </div>
        <div id="level-one">
            <h2>{data.data.info.name}</h2>
            <h3>⭐{data.data.info.avgRating}</h3>
        </div>
        <div id="level-two">
            <p>{data.data.info.cuisines.join(" ,")}</p>
        </div>
        <div id="level-three">
            <h4>{data.data.info.locality},{data.data.info.areaName}</h4>
            <h5>🕔{data.data.info.sla.deliveryTime} mins</h5>
        </div>
    </div>)
}

export default Body;