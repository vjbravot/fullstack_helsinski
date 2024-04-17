
const Filter = ({value,onChange}) => {
    console.log({onChange})
    return (
    <div>filter shown with
    <input 
    value = {value}
    onChange={onChange}/>
  </div>
    )
}
    
export default Filter