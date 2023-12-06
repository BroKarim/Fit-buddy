// import { useState } from "react"

const checkBMI = (tinggi, berat) => {
    tinggi/=100.0
    const bmivalue = parseFloat(berat) / (parseFloat(tinggi)*parseFloat(tinggi))
    const fixedBmi = bmivalue.toFixed(2);
    return fixedBmi;

}

export default checkBMI