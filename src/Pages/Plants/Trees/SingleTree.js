import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Simpleslider from './Simpleslider';

const SingleTree = () => {
               const { treeId } = useParams();
               const [tree,setTree] = useState({})
               useEffect(()=>{
                          fetch(`http://localhost:5000/indoor-plants/${treeId}`)
                          .then(res=>res.json())
                          .then(data=> setTree(data))
                      },[])
               return (
                              <div class="container">
  <div class="row row-cols-3 m-4 mx-4">
    
    
    <div class="col">
    <br /><br /><br /><br />
<img className='tree-img' src={tree.image} alt="" />
    </div>
    <div class="col text-start about-part">
                   <br /><br /><br /><br /><br />
                <h2 className='text-danger'>{tree.name}</h2> 
                <h5>{tree.title}</h5>
                <p>{tree.about}</p> 
                <h5>{tree.tags}</h5> 
                <input
              type="number"
              name="number"
              placeholder= "1"
              className="single-form p-2 m-2"
//               onBlur={handlePasswordChange}
              required
            />
                <h1>$ {tree.price} <span className='fs-6'>(Per)</span> </h1>
                
    </div>
    <div class="col">
                   <br /><br /><br /><br />
                   {/* <h2>user info</h2> */}
                   <form>
                   {/* onSubmit={handleLoginForm} */}
                   
            <label htmlFor="email"></label>
<input
              type="name"
              name="Name"
              placeholder="Name"
              className="p-2 m-2  w-100 "
//               onBlur={handlePasswordChange}
              required
            />
            
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-2 w-100 m-2 "
//               onBlur={handleEmailChange}
              required
            />
            <br />
            
            <input
//               type="number"
              name="number"
              placeholder="phone Number"
              className="p-2 m-2  w-100 "
//               onBlur={handlePasswordChange}
              required
            />
            <br />
            
            <input type="submit" value="Buy now" className="p-2 w-100 m-2" />
          </form>
    </div>
  </div>
  <hr />
  <Simpleslider></Simpleslider>
</div>

               );
};

export default SingleTree;