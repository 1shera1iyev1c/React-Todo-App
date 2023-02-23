
export const Item = ({todos}) => {
    return (
        <>
            <li className="item d-flex align-items-center pe-3 pt-3 pb-3 ps-3 justify-content-between border mt-3 rounded">
                <div className="d-flex align-items-center ">
                <input type="checkbox" className="form-check-input me-5 check"/>
                <span className="me-5">{todos.id}</span>
                <h2 className="todo">{todos.text}</h2>
                </div>
                <div className="d-flex">
                <button className="btn btn-danger float-end me-3">Delete</button>
                <button className="btn btn-primary float-end">Edit</button>
                </div>
            </li>     
        </>
    )
}
