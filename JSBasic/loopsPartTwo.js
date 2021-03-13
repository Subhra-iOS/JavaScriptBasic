const webSites = ["youtube", "facebook", "instagram", "netflix", "amazon"];

// for(const n of webSites){
//     console.log(n);
// }

const symbols = {
    yt: "youtube",
    fb: "facebook",
    ins: "instagram"
}

for(const n in symbols){
    console.log(`keys: ${n} and values: ${symbols[n]}`);
}