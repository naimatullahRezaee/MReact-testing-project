import { Container, Row,Col } from "react-bootstrap"
import ArticleItem from "../../Components/Article/ArticleItem"
import NavBar from "../../Components/Navbar/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [newArticle, setArticles] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/articles")
        .then(response=> setArticles(response.data)
        
        
        
        )
    },[])
    return (
        <>
       

            <NavBar/>
            <Container>
                <h1 style={{marginTop:'20px'}}>لیست مقالات </h1>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
                   {newArticle.map((item)=>(
                     <Col key={item.id}>
                     <ArticleItem {...item}/>
                     </Col>
                     
                   ) )}
                    
                </Row>
            </Container>
        
        </>
    )
    
}

export default Home