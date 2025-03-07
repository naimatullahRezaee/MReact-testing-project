import NavBar from "../../Components/Navbar/Navbar"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
const [formData, setFormData] = useState({})

    const resetFormData = () => {
      setFormData({
        title: "",
        desc: "",
        image: "",
        writter: "",
        category: "",
        readingTime: "",
      })
    }
    const addArticlehandler = ()=>{
        axios.post('http://localhost:5000/articles', formData)
        .then(response=>{
          if (response.status === 201){
            Swal.fire({
              title : 'مقاله با موفقیت ساخته شد',
              time: 1500,
              timerProgressBar: true,
              showConfirmButton: false,
            }
              
            )
          }
        })
        .catch(error => {
          Swal.fire({
            title : 'مقاله ساخته نشد',
            time: 1500,
            icon: 'error',
            timerProgressBar: true,
            showConfirmButton: false,
          })
        }
        )
        resetFormData()
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
        <Form.Control value={formData.title} onChange={(e)=> formHanler(e,'title')} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label> توضیح کوتاه</Form.Label>
        <Form.Control value={formData.desc} onChange={(e)=> formHanler(e,'desc')} type="text" placeholder="توضیح کوتاه" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control value={formData.writter} onChange={(e)=> formHanler(e,'writter')} type="text" placeholder="علی" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control value={formData.category} onChange={(e)=> formHanler(e,'category')} type="text" placeholder="ری اکت" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control value={formData.image} onChange={(e)=> formHanler(e,'image')} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>مدت زمان مقاله</Form.Label>
        <Form.Control value={formData.readingTime} onChange={(e)=> formHanler(e,'readingTime')} type="number" />
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