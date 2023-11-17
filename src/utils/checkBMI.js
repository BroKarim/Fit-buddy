// import { useState } from "react"

const checkBMI = (tinggi, berat) => {
    tinggi/=100.0
    const bmivalue = parseFloat(berat) / (parseFloat(tinggi)*parseFloat(tinggi))
    
    return bmivalue;

}

export default checkBMI