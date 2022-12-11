import { connect } from "react-redux";
let Loader = ({loading}) => (
    loading ? <img src="https://gifimage.net/wp-content/uploads/2018/04/loading-icon-gif-6.gif"/> : null
)

const mapStateToProps = (state) => ({ loading: state.isLoading })

Loader = connect(mapStateToProps,null)(Loader)
export default Loader;