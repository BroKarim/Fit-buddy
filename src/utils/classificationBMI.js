import { useState } from "react";
export function classificationBMI(bmivalue) {
    const [Bmiclass, setBmiclass] = useState("undefined");
    if(bmivalue < 18.5){
        return "Underweight";
    }else if(bmivalue < 25.0){
        return "Normal";
    }else if(bmivalue < 30.0) {
        return "Overweight";
    }else {
        return "Obesity";
    }
} 