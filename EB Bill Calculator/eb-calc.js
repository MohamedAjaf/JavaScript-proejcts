function calculate_eb(){
    let units=document.getElementById("units").value;
    let cost;
    if(units<=100)
        cost=0.0;
    else if(units<=200)
        cost=(units-100)*2.25;
    else if(units<=400)
        cost=225+(units-200)*4.50;
    else if(units<=500)
        cost=225+900+(units-400)*6.00;
    document.getElementById("result").innerHTML=cost;
}