import React from 'react'
import Rate from './cmc-table/Rate'
import Image from 'next/image'

const styles = {
    trandingCarRow: `flex items-center justify-between mt-4 text-[0.93rem]`
}

const TrendingCardRow = ({key,number,name,symbol,isIncrement,rate, icon}) => {
    return (
        <div className={styles.trandingCarRow}>
            <p className="opacity-40">{number}</p>
            <div className="w-full flex">
                <div className="mx-5">
                    {icon && <Image src={icon} width={20} height={20}/>}
                </div>
                <p>
                    {name}
                    <span className='text-grey-400'>&nbsp;{symbol}</span>
                </p>
            </div>
            <Rate isIncrement={isIncrement} rate={rate} />
        </div>
    )
}

export default TrendingCardRow