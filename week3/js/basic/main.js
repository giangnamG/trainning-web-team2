function main(){

    array()
    promise()

}


function array (){

    var a = [1,2,3,4,5,6,7,8,9,10]
    var b = ['a','b','c',[11,12,13,14]]
    var c = [...a,...b]
    console.log(c)
    var s = c.join(' ')
    console.log(s,typeof s)
    var d = s.concat(a.join(''))
    console.log(d)
    function restParameter(a,b,c,...arr){
        console.log("arr",arr)
    }
    restParameter(...d)
}
// array()

function promise(){
    var promise = new Promise(function(resolve, inject){
        let i = 1
        if(i)
            resolve("ok")
        else
            inject("hmm... wrong")
    })
    promise
            .then(function(result){
                console.log(result)
            })
            .catch(function(result){
                console.log(result)
            })
            .finally(function(){
                console.log("event active")
            })
}
