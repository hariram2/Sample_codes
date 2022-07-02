import { useEffect, useState } from 'react';

function StateEx() {

    const [post, setPosts] = useState('Purple');
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('Hey! useEffect is Triggered...!')
    },[count])





    return (
      <div>
        <h2 style={{padding:'70px 0 30px 0'}}>UseState Page</h2>

        <div>
            <h4>Hey! This is react Hook state {post} </h4>
            <button type='button' onClick={(() => setPosts('Red'))}>Click</button>
        </div>

        <div>
            <h4>Total No. of Clicks is {count} </h4>
            <button type='button' onClick={(() => setCount(count + 1))}>Click</button>
        </div>
      </div>
    );
  }
  
  export default StateEx;
