import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleTotal}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:w-3/4">
            {
                courses.map(course=><Course handleTotal={handleTotal} key={course.id} course={course}></Course>)
            }
        </div>
    );
};


Courses.propTypes = {
    handleTotal: PropTypes.func.isRequired,
};
export default Courses;