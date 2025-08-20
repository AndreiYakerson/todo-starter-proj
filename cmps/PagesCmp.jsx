
const { useSelector, useDispatch } = ReactRedux

export function PagesCmp({ onChangePage }) {
    const filterBy = useSelector(state => state.todoModule.filterBy)

    return (
        <div className="pages-btn-container">
            <button className="btn" onClick={() => onChangePage(-1)}>←</button>
            <span className="page">{+filterBy.pageIdx + 1}</span>
            <button className="btn" onClick={() => onChangePage(1)}>→</button>
        </div>
    )
}