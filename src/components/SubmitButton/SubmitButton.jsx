import PropTypes from "prop-types";

function SubmitButton({ children }) {
    return (
        <>
            <button className="SubmitButton">{children}</button>
        </>
    );
}

SubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SubmitButton;
