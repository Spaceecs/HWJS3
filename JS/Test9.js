for(let i=1; i<=10;i++)
{
    let result = '';
    for(let j = 1;j<=10;j++)
    {
        result += `${i} x ${j} = ${i * j}\n`;
    }
    alert(result);
}