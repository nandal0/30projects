import   './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li 
    // style={{

    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   borderBottom: '2px solid #8a2b06',
    //   padding: '1rem 0',
    //   margin: '1rem 0',
    // }}
    className="cart-item"

    >
      <div>
        <h2>{props.name}</h2>
        <div className="summoary">
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
