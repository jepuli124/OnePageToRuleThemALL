import React, { type ReactNode } from 'react'

interface incomingParams{
    children?: ReactNode
}

const CurrentEvent: React.FC<incomingParams> = ({children}) => {
    return (
    <div style={{minHeight: "100vh", justifyContent:"center", alignContent: "center", background: "linear-gradient(180deg, var(--main1dark) 0%, var(--main3darker) 5%, var(--main3darker) 15%, var(--main2dark) 40%, var(--main2dark) 60%, var(--main3darker) 90%, var(--main3darker) 95%, rgba(0, 0, 0, 0) 100%)"}}>
        {children? 
            <>
                {children}
            </>
            :   
            <div style={{fontFamily: 'knive'}}>
                <h1>It seems that there isn't any events planned</h1>
                <h3>You may ask additional information from the Minced Meat Goblin</h3>
            </div> 
        }
        
    </div>
    
    )
}

export default CurrentEvent