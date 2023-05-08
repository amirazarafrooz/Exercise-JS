//count each letter in sentence
const sentence = "khanom hoseini jalase akhar dasht sabzi pak mikard yadesh be kheir ..."
const rawData = [...sentence]
const data = Object.values(rawData.reduce((prev,cur) => {
const letters  = cur.toUpperCase();
const count = 1;

    if(!prev[letters]) prev[letters] = {letters: letters,count : 1}
    else prev[letters].count=prev[letters].count+1;
    return prev;
}, {}))

const outPut = {}
for(let i = 0; i < data.length; i++){
    console.log(data[i].letters + ' : ' + data[i].count)
}