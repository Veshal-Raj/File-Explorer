
const CreateFolder = ({ data }) => {
    return data && data?.map(exp => {
        const isFolder = !!exp?.children;
        return (
            <div key={exp?.id}>
            <span>{isFolder ? '📁' + exp?.name : '📄' + exp?.name}</span>
            {isFolder && <CreateFolder data={exp?.children} />}
        </div>
        )
    })
}

export default CreateFolder
