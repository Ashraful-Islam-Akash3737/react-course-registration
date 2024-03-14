import PropTypes from 'prop-types';
import CartTitle from '../CartTitle/CartTitle';

const Cart = ({ totalCredit, totalPrice, cartTitle, remaining }) => {
    return (
        <div className=" w-full md:w-1/4 md:ml-6 p-6 bg-white rounded-lg">
            {/* <p>length: {carts.length}</p> */}
            <h3 className="text-[18px] font-bold text-[#2F80ED] mx-auto text-center">Credit Hour Remaining {remaining} hr</h3>
            <hr className="my-4" />
            <h3 className="text-[20px] font-bold text-[#1C1B1B] mb-5">Course name</h3>


            <div className=" rounded-lg ">
                {
                    cartTitle.map((title, idx)=> <CartTitle key={idx} cartTitle={title}></CartTitle>)
                }
            </div>
            


            <hr className="mb-4" />
            <h3 className="text-[16px] font-medium text-[#777676]">Total Credit Hour : {totalCredit}</h3>
            <hr className="my-4" />
            <h3 className="text-[16px] font-semibold text-[#777676]">Total Price : {totalPrice} USD</h3>
        </div>
    );
};

Cart.propTypes = {
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number,
    remaining: PropTypes.number,
    cartTitle: PropTypes.array,
};
export default Cart;