import React, { useEffect } from 'react'

const Lecture = () => {
    useEffect(() => {
        document.title = "Lecture & scriptures";
    }, []);
    return (
        <div>Lecture</div>
    )
}

export default Lecture