import PropTypes from "prop-types";

function DropDownGallery({ pages, onSelect, selectedIndex }) {
    return (
        <select
            value={selectedIndex}
            onChange={(e) => onSelect(Number(e.target.value))}
             className="dropDownGallery"
        >
            {pages.map((page, index) => (
                <option key={index} value={index} className="dropDownGallery__item">
                    {page.title}
                </option>
            ))}
        </select>
    );
}

DropDownGallery.propTypes = {
    pages: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
};

export default DropDownGallery;
