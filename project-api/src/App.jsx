import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Articles from './Pages/Articles/Articles'
import Addarticle from './Pages/AddArticle/AddArticle'
import EditArticle from './Pages/EditArticle/EditArticle'

function App() {
    return(
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/article/:articleId" element={<Articles/>}/>
             <Route path="/add-article" element={<Addarticle/>}/>
             <Route path="/edit-article/:articleId" element={<EditArticle/>}/>
           </Routes>
        </BrowserRouter>
    )
    
}

export default App