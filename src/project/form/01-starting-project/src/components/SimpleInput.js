import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name,setName] = useState('')

  const inpName=useRef()
const onValueChange =(e)=>{
  setName(e.target.value)
}
  const onsubmit=(e)=>{

    e.preventDefault()
    console.log(name);
    const enteredName=inpName.current.value;
    console.log(enteredName);
    setName('')
  }
  return (
    <form onSubmit={onsubmit} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={inpName} value={name} type='text' id='name' onChange={onValueChange} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
