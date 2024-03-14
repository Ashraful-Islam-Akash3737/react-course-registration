import PropTypes from 'prop-types';

const CartTitle = ({ cartTitle }) => {
    return (
        <ol className="">
            
            
            <li className=" bg-[#f3f3f3] text-sm font-medium text-[#111] mb-4 rounded-lg p-4">
                {cartTitle}
            </li>
        </ol>
    );
};

CartTitle.propTypes = {
    cartTitle: PropTypes.string,
};

export default CartTitle;