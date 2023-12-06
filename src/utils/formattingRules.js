import { useState } from "react";
const formattingRules = (umur, jk, bmi) => {
    // const [umur_class, setUmur_class] = useState('')
    // const [bmi_class, setBmi_class] = useState('')

    let umur_class;
    if(umur <= 21){
        umur_class="15-21";
    }
    else if(umur <= 35){
        umur_class="22-35";
    }
    else{
        umur_class="36-70";
    }

    let bmi_class;

    if (bmi === "Underweight") {
        bmi_class = "kurang";
    } else if (bmi === "Normal") {
        bmi_class = "ideal";
    } else if (bmi === "Overweight" || bmi === "Obesity") {
        bmi_class = "lebih";
    }

    return `${umur_class}|${jk}|${bmi_class}`
}

export default formattingRules