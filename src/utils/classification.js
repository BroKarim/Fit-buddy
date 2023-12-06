import data from "../rules/rules2.json"

const classification = (input) =>{
    for (const key in data){
        if(data.hasOwnProperty(key)){
            const classArray = data[key];

            for(let i = 0; i < classArray.length; i++){
                const classItem = classArray[i];
                if(classItem.includes(input)){
                    // setResult(key);
                    return key;
                    
                }
            }
        }
    }
    // setResult("undefined");
    return "undefined";
}

export default classification