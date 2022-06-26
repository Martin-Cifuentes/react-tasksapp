export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if(window.confirm('are you sure you want to delete the done tasks?')){
            cleanTasks()
        }
    }
    
    return (
        <div className = "d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className = "form-check form-switch">
                <input 
                    className = "form-check-input"
                    type="checkbox"
                    onChange={e => setShowCompleted(e.target.checked)}
                    checked = {isChecked}    
                />
                <label>Show Done Tasks</label>
            </div>

        <button onClick = {handleDelete} className = "btn btn-danger btn-sm">
            Clear
        </button>

        </div>
    )
}