import Card from "./shared/Card"
import PropTypes from "prop-types"



function FeedbackItem({ key, item }) {

    return (
        <Card id={key}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>

        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,

}

export default FeedbackItem