import { useState } from "react";

const CreateFolder = ({ data }) => {
    const [expandFolder, setExpandFolder] = useState({})
    console.log(expandFolder)
    const toggleExpand = (id) => {
        setExpandFolder((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    };

    return data && data?.map(exp => {
        const isFolder = !!exp?.children;
        const isExpanded = expandFolder[exp?.id];
        return (
            <div key={exp?.id} style={{ cursor: isFolder ? "pointer" : "default", marginLeft: "50px"}} onClick={isFolder ? () =>  toggleExpand(exp?.id) : null}>
            <span>{isFolder ? (isExpanded ? "📂 " : "📁 ")  + exp?.name : '📄' + exp?.name}</span>
            {isExpanded && isFolder && <CreateFolder data={exp?.children} />}
        </div>
        )
    })
}

export default CreateFolder
