export default function swdev(){
    let url=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(url).then((response)=>{
        console.warn(response,"response")
    })
}