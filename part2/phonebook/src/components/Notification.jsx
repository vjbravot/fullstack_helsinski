Notification = ({message, type}) =>{
    console.log(type)
    if(type == 'error'){
        return (
            <div className = 'error'>
            {message}
            </div>
            )
        }
    else{
        return (
            <div className = 'message'>
               {message}
            </div>   
           )
    }
    }
export default Notification