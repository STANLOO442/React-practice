import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

const Likes = () => {
    const [status, setStatus] = useState(true);

    if (status) return <AiFillHeart color="red" size={50} onClick={()=> {setStatus(false)}}/>;
    return <AiOutlineHeart size={50} onClick={()=> {setStatus(true)}}/>
};

export default Likes
