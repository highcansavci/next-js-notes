"use client"

const User = ({params}) => {
    console.log(params)
    return (
        <div>{params.user}</div>
    );
}

export default User;