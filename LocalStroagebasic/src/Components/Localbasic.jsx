import React from 'react'


export default function Localbasic() {
    localStorage.setItem("name", "student")
    localStorage.setItem("name", "student2")


    let data = localStorage.getItem("name")
    console.log(data);

    localStorage.removeItem("name");

    let obj = { name: "Bhautik", subject: "react" };
    localStorage.setItem("myobj", JSON.stringify(obj));

    let objdata = JSON.parse(localStorage.getItem("myobj"))
    console.log(objdata);

    return (
        <div>
            
        </div>
    )
}
