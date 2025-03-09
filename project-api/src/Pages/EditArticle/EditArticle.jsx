import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../../Components/Navbar/Navbar"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './editArticle.css'
import Swal from "sweetalert2";

function EditArticle() {

    const  articleId = useParams().articleId
    const [articleData, setArticleData] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
            axios.get(`http://localhost:5000/articles/${articleId}`) 
            .then( response => setArticleData(response.data))
    },[])

    const editArticlehandler = (e) => {
        axios.put(`http://localhost:5000/articles/${articleId}`, articleData)
        Swal.fire({
            title: 'مقاله با موفقیت ویرایش شد',
            icon: "success",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
  
        })
        navigate('/')
    }
    const formHanler =(e, propertyName)=>{
        setArticleData({...articleData,[propertyName]: e.target.value})
        
    }
    return (
        <>
        <NavBar/>
    <div className="formContainer">
    <Form>
  <Form.Group className="mb-3" >
    <Form.Label>عنوان مقاله</Form.Label>
    <Form.Control value={articleData.title} onChange={(e)=> formHanler(e,'title')} type="text" placeholder="عنوان مقاله را وارد کنید" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label> توضیح کوتاه</Form.Label>
    <Form.Control value={articleData.desc} onChange={(e)=> formHanler(e,'desc')} type="text" placeholder="توضیح کوتاه" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>نویسنده مقاله</Form.Label>
    <Form.Control value={articleData.writter} onChange={(e)=> formHanler(e,'writter')} type="text" placeholder="علی" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>موضوع مقاله</Form.Label>
    <Form.Control value={articleData.category} onChange={(e)=> formHanler(e,'category')} type="text" placeholder="ری اکت" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>عکس مقاله</Form.Label>
    <Form.Control value={articleData.image} onChange={(e)=> formHanler(e,'image')} type="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>مدت زمان مقاله</Form.Label>
    <Form.Control value={articleData.readingTime} onChange={(e)=> formHanler(e,'readingTime')} type="number" />
  </Form.Group>
 

  
  <Button onClick={editArticlehandler} variant="primary" type="button">
    ویرایش مقاله
  </Button>
</Form>
    </div>
    </>
    )
    
}

export default EditArticle