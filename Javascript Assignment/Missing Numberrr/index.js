let num = [1,5,3,2,7,4,8,9]
parseInt(num);
missing = [];
num = num.sort();
console.log(num);
len = num.length;
found = false;

for(let i = 1; i <10; i++)
{
    for (let index = 0; index < len; index++) 
    {
        found = false;
    if(num[index] === i)
    {
        found = true;
        break;
        
    }

}

if(!found)
{
    missing.push(i);
}
    
   
}

console.log(missing);