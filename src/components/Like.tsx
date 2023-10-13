import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [likeColor, setLikeColor] = useState(false);
  
//   const [cartItems, setCartItems] = useState(['Proiducts 1','Proiducts 2' ]);
  if (likeColor)
    return (
      <AiFillHeart
        onClick={() => setLikeColor(false) }
        color="#ff6b81"
        size={20}
      />
    );
  return <AiOutlineHeart size={20} onClick={() => setLikeColor(true)} />;
}; 

export default Like;
