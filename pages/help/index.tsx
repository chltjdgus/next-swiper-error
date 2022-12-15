import React from 'react';
import Link from 'next/link'

const HelpSample = () => {
    return (
        <div style={{height:500}}>
            HELP NEW PAGE
            <br/>
            <Link href={"/exam"}>EXAM LINK</Link>
<br/>
            Try History back. Change URL but not change page.
        </div>

    );
};
export default HelpSample;

