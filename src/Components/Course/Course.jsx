import PropTypes from 'prop-types';

const Course = ({ course, handleTotalCredit }) => {
    const {  name, description, photo, price, credit } = course;
    return (
        <div className="p-4 bg-white rounded-lg">
            <img className='rounded-lg mb-4' src={photo} alt="" />
            <div className="">
                <h3 className="text-[18px] font-semibold mb-3 text-[#1C1B1B] ">{name}</h3>
                <p className="text-sm font-normal mb-5 text-[#777676]">{description}</p>
                <div className="flex items-center justify-between mx-auto gap-4 mb-6">
                    <p className="text-[16px] font-medium text-[#777676] ">Price: {price}</p>
                    <p className="text-[16px] font-medium text-[#777676] ">Credit: {credit}hr</p>
                </div>
                <button onClick={()=>handleTotalCredit(course)} className='bg-[#2F80ED] text-center w-full font-semibold text-[18px] py-2 px-24 rounded-lg text-white'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
};

export default Course;