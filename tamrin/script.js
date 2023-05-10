//count each letter in sentence
const sentence = "khanom hoseini jJalase akhar dasht sabzi pak mikard yadesh be kheir ..."


function oniKePeyvandiMikhast(str = '') { 
const rawData = str.replaceAll(' ','').split('');
const data = (rawData.reduce((prev,cur) => {
const count = 1;
    if(!prev[cur]) prev[cur] = 0 + 1
    else prev[cur]=prev[cur]+1;
    return prev;
}, {}))
return data
}


console.log(oniKePeyvandiMikhast(sentence));
