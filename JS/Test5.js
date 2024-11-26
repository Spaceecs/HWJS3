let minus =0, zero =0, plus =0
for(let i = 0;i<10;i++)
{
    let num = parseFloat(prompt("Enter number"))
    if(num>0)
    {
        plus++
    }
    else if(num<0)
    {
        minus++
    }
    else
    {
        zero++
    }
}
alert(`Minus = ${minus} Zero = ${zero} Plus = ${plus}`)