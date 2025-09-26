import PropTypes from 'prop-types';
function List(props) {
    const catogiry = props.catogiry;
    const itemList = props.items;
    const fruitItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);
    return (
        <>
            <h3 className="list-catogiry">{catogiry}</h3>
            <ol className="list-items">{fruitItems}</ol>
        </>
    );
    
}
List.propTypes = {
    catogiry: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number })),
    }
List.defaultProps = {
    catogiry: "Catogiry",
    items: [],
}
export default List;        