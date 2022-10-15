//console.log("Terminalden çalıştırıldım");
//Node js tarafından global olarak kullanıma açar.
module.exports = {
    forEach(array,func){
        // for (let i = 0; i < array.length; i++) {
        //     const value = array[i];
        //     func(value)
        // }
        for (let index in array) {
         func(array[index],index)
        }
    },
    map(array,func){
        const result = [];
        for (let i = 0; i < array.length; i++) {
          result.push(func(array[i],i))    
        }
        return result;
    }
}