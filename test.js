const a = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(1)
            resolve(1)
        },Math.random() *100)
    })
}

const b = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(2)
            resolve(2)
        },Math.random() *100)
    })
}

const c = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(3)
            resolve(3)
        },Math.random() *100)
    })
}

a().then(ret => b()).then(ret => c())
