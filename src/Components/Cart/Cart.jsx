

const Cart = () => {
    return (
        <div className=" w-full md:w-1/4 md:ml-6 p-6 bg-white rounded-lg">
            <h3 className="text-[18px] font-bold text-[#2F80ED] mx-auto text-center">Credit Hour Remaining 7 hr</h3>
            <hr className="my-4" />
            <h3 className="text-[20px] font-bold text-[#1C1B1B] mb-5">Course name</h3>

            <div className="mb-6"></div>

            <hr className="mb-4" />
            <h3 className="text-[16px] font-medium text-[#777676]">Total Credit Hour : 13</h3>
            <hr className="my-4" />
            <h3 className="text-[16px] font-semibold text-[#777676]">Total Price : 48000 USD</h3>
        </div>
    );
};

export default Cart;