import PropTypes from "prop-types";

function SubmitButton({ children }) {
    return (
        <>
            <button className="SubmitButton" type="submit">{children}</button>
        </>
    );
}

SubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SubmitButton;
