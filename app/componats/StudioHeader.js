import Link from 'next/link'
import React from 'react'

export const StudioHeader = (props) => {
    return (
        <div>
            <div className=' flex items-center justify-center py-4'>
                <Link href={'/'}>
                    <img className=" h-10 " src="https://bit.ly/3FrleBg" />
                </Link>

            </div>
            {props.renderDefault(props)}

        </div>

    )
}
