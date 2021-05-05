import React from 'react'

const CardDisplay = (props) => {
    
    return (
        <>
            <div>
            <i class = "fa fa-times" aria-hidden="true" onClick={props.onSelect}/>
            <li>{props.text}</li>
            </div>
        </>
    

        

    )
    
        
            
        
    
}

export default CardDisplay
