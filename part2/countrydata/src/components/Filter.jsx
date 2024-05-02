const Filter = ({value,handler}) => {
    return (
    <div>
        Filter by country
        <input value = {value} onChange = {handler}>
        </input>

    </div>
    )
}

export default Filter