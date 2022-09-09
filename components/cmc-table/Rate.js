import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown';
import ChevronUp from '../../assets/svg/chevronUp';


function Rate({isIncrement, rate}) {
  return (
    <div className={styles.rate}>
        {isIncrement ? <ChevronUp fill="#17c784" /> : <ChevronDown fill="#EA3943" />}
        <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  )
}

const styles ={
    rate: `rate flex items-center`,
    red: `ml-2 text-[#EA3943]`,
    green: `ml-2 text-[#17C784]`
}



export default Rate