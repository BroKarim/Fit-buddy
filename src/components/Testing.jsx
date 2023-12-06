import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import classification from '../utils/classification';
import checkBMI from '../utils/checkBMI';
import formattingRules from '../utils/formattingRules';



// import data from "../rules/rules.json"


const Testing = () => {

    const umur = 23
    const jk = "pria"
    const tinggi = 178
    const berat = 90
    
    const [bmiclass, setBmiclass] = useState('');
    const [result, setResult] = useState('');
    const [contoh, setContoh] = useState('');
    
    
    const fetchData = () =>{
        const bmivalue = checkBMI(tinggi, berat);
        
        
        
        const newContoh = formattingRules(umur,jk,bmiclass);
        setContoh(newContoh)
        
        const res = classification(contoh);
        setResult(res)
    }


    useEffect(()=>{
       fetchData()
    },[])
    
    // const result = classification(contoh);


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                
                <h1>Klasifikasi</h1>
                <p></p>
                <pre>{result ? result : "kosong"}</pre>
                <h1>BMI</h1>
                <p></p>
                <pre>{bmiclass ? bmiclass : "kosong"}</pre>
                <h1>Data Contoh</h1>
                <p></p>
                <pre>{contoh ? contoh : "kosong"}</pre>
            </div>
        </>
    )
}

export default Testing;