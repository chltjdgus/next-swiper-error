import React from 'react';
import Link from 'next/link'

const HelpSample = () => {
    return (
        <div style={{height:500}}>
            help new page
            <Link href={"/exam"}>exam link</Link>

        </div>

    );
};
export default HelpSample;

