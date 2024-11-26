let numbers =prompt("Enter diapason")
let [x,y] = numbers.split(" ").map(Number)
let sum=0
if (x<y)
{
    for(let i=x;i<=y;i++)
    {
        sum+=i
    }
}
else
{
    for(let i=y;i<=x;i++)
    {
        sum+=i
    }
}
alert(`Sum = ${sum}`)