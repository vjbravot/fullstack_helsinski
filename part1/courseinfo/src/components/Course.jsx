const Course = ({ course }) => {
    const total = course.parts.reduce((s,p) => s + p.exercises,0);
    return(
        <div>
        <h1>{course.name}</h1>
        {course.parts.map(part => <CoursePart key = {part.id} course_part = {part}/>)}
        <b>Total exercises: {total} </b>
        </div>
    )
}
const CoursePart = ({course_part}) => {
    return(
        <p>{course_part.name} {course_part.exercises}</p>
    )
}


export default Course