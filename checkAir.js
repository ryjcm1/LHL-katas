const checkAir = (samples, threshold) =>{

    NumOfSamples = samples.length
    dirtyCounter = 0

    for(let i = 0; i < NumOfSamples; i++){
        if(samples[i] === "dirty"){
            dirtyCounter++
        }
    }

    if(dirtyCounter/NumOfSamples >= threshold){
        return "Polluted"
    }else{
        return "Clean"
    }   
}

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))