import React from 'react'

// this is a comment JSX
let name = "Friends List";
const friendsList = [
    { Fname: "Jignesh", Lname: "Dabhi", Desig: "Flutter Developer", age: 18, Mobile: "7878877858", isMarried: "" },
    { Fname: "Ajay", Lname: "Makwana", Desig: "React Developer", age: 35, Mobile: "9824232491", isMarried: "" },
    { Fname: "Kartik", Lname: "Khandala", Desig: "Node.js Developer", age: 28, Mobile: "7405449078", isMarried: "" },
];
function User() {
    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>{name}</h1>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <table border="1" cellPadding="10" >
                    <thead >
                        <tr style={{ borderCollapse: "collapse", width: "100%", borderColor: "#1B1464", backgroundColor: "#20A7DB" }}>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Designation</th>
                            <th>Mobile</th>
                            <th>Married</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friendsList.map((friend, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{friend.Fname}</td>
                                <td>{friend.Lname}</td>
                                <td>{friend.Desig}</td>
                                <td>{friend.Mobile}</td>
                                <td>{friend.age > 20 ? friend.isMarried = "Yes" : "No"}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    );
}
// this is a comment java script
function User1() {
    return React.createElement("div", {
        className: "App"
    }, React.createElement("h1", null, "Jignesh Dabhi"),
        React.createElement("h4", null, "I am Flutter Developer"),
        React.createElement("h4", null, "7878877858")

    );
}

export default User;