import React from 'react';
import Link from 'next/link'

const HelpSample = () => {
    return (
        <div style={{height:500}}>
            HELP NEW PAGE
            <br/>
            <Link href={"/exam"} style={{color:'red'}}>EXAM LINK</Link>
<br/>
           <b style={{color:'yellow'}}> 3. Try History back. Change URL but not change page. (MOUSE back key)</b>
        </div>

    );
};
export default HelpSample;

