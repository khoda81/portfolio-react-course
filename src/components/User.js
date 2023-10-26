import React, { useState } from "react";

export default function User() {
    const [user, setUser] = useState({ firstName: "", lastName: "" });

    const handleFirstNameChange = (e) => {
        setUser({ ...user, firstName: e.target.value });
    };

    const handleLastNameChange = (e) => {
        setUser({ ...user, lastName: e.target.value });
    };

    return (
        <div>
            <input type="text" value={user.firstName} onChange={handleFirstNameChange} placeholder="First Name" />
            <input type="text" value={user.lastName} onChange={handleLastNameChange} placeholder="Last Name" />
            <p>
                Hello, {user.firstName} {user.lastName}
            </p>
        </div>
    );
}
