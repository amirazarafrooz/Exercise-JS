//count each letter in sentence
const sentence = "khanom hoseini jJalase akhar dasht sabzi pak mikard yadesh be kheir ..."


function oniKePeyvandiMikhast() { 
const rawData = sentence.replaceAll(' ','').split('');
const data = (rawData.reduce((prev,cur) => {
// const letters  = cur;
const count = 1;
    if(!prev[cur]) prev[cur] = 1
    else prev[cur]=prev[cur]+1;
    return prev;
}, {}))

const outPut = {}
for(let i = 0; i < data.length; i++){
    // console.log(data[i].letters + ' : ' + data[i].count)
}
return data
}


oniKePeyvandiMikhast(sentence);
console.log(oniKePeyvandiMikhast(sentence));
