import NavBar from "../../Components/Navbar/Navbar"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";

function AddArticle() {
const [formData, setFormData] = useState({})
    const addArticlehandler = ()=>{
        // axios.post("http://localhost:5000/articles",{
        //     title: "دهم عنوان مقاله",
        //     desc: "توضیح کوتاه",
        //     writter: "علی",
        //     category: "ری اکت",
        //     image: "./src/assets/images/image2.jpg",
        //     readingTime: 66
        // })

        axios.post('http://localhost:5000/articles', formData)
        
    }

    const formHanler =(e, propertyName)=>{
        setFormData({...formData,[propertyName]: e.target.value})
        
    }

    return (
        <>
            <NavBar/>
        <div className="formContainer">
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control onChange={(e)=> formHanler(e,'title')} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label> توضیح کوتاه</Form.Label>
        <Form.Control onChange={(e)=> formHanler(e,'desc')} type="text" placeholder="توضیح کوتاه" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control onChange={(e)=> formHanler(e,'writter')} type="text" placeholder="علی" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control onChange={(e)=> formHanler(e,'category')} type="text" placeholder="ری اکت" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control onChange={(e)=> formHanler(e,'image')} type="file" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>مدت زمان مقاله</Form.Label>
        <Form.Control onChange={(e)=> formHanler(e,'readingTime')} type="number" />
      </Form.Group>
     

      
      <Button onClick={addArticlehandler} variant="primary" type="button">
        ساخت مقاله
      </Button>
    </Form>
        </div>
        </>
     )
    
}

export default AddArticle