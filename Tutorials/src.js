let A = [1,3,6,4,1,2];
let length = 0;
   let i =1; 
   do{
    if(A.includes(i))
    {
        i++;
        console.log(i)
    }
    length++;
    console.log(length)
    }while(A.length != length)