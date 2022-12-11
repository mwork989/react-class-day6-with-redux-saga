import { connect } from "react-redux";
import { getIndiaLatestNews,getUSLatestNews } from "../../actions";

let Button = ({getIndiaNews,getUSNews}) => (
    <div>
        <button onClick={getIndiaNews}>Get India Latest News</button>
        <button onClick={getUSNews}>Get US Latest News</button>
    </div>
)

const mapDispatchToProps = {
    getIndiaNews : getIndiaLatestNews,
    getUSNews: getUSLatestNews
}
Button = connect(null,mapDispatchToProps)(Button)

export default Button;