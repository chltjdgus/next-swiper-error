import React from 'react';
import Link from 'next/link'

const HelpSample = () => {
    return (
        <div style={{height:500}}>
            HELP NEW PAGE
            <br/>
            <Link href={"/exam"} style={{color:'red'}}>EXAM LINK</Link>
<br/>
           <b style={{color:'yellow'}}> Try History back. Change URL but not change page.</b>
        </div>

    );
};
export default HelpSample;

