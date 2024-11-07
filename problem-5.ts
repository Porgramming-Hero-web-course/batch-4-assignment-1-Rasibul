{


    function getproperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    const person ={
        name:"Alica",
        age:25
    }

   
    const name: string = getproperty(person, "name");
    
    console.log(name);

}