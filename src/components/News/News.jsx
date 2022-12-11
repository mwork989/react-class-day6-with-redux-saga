
import { connect } from "react-redux";

const cardStyle ={
        border:"1px solid grey",
        borderRadius: "5px",
        margin: "10px",
        padding: "10px",
        backgroundColor:"lightblue",
        width:"300px"
}

const imgStyle = {
    height: "100px",
    width: "100px"
}


let News  = ({ articles}) =>(
    articles ? articles.map((news,index)=>{
        return (
                <section style={cardStyle} key={index}>
                    <p>{news.title}</p>
                    <p>{news.content}</p>
                    <p>{news.description}</p>
                   <img style={imgStyle} src={news.urlToImage} alt="article" />
                   <p>test</p>
                </section>
            )
    })
    :null
)
const mapStateToProps = (state) => (
    {
        articles: state.news

})

News = connect(mapStateToProps, null)(News)
export default News;