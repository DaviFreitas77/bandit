
import { Header } from './componentes/header'
import Banner from './componentes/banner'
import Category from './componentes/category'
import ProductFeatured from './componentes/productFeatured'
import { useState } from 'react'

function App() {
 const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <div>
        <Header/>
        <Banner/>
          <Category setSelectedCategory={setSelectedCategory} />
        <ProductFeatured selectedCategory={selectedCategory}/>
   
    
    </div>
  )
}

export default App
