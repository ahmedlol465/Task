import { useState } from "react";
import Model from "./componand/UI/Model";
import { formInputsList, productList } from "./componand/data";
import ProductCard from "./componand/product"
import Button  from "./componand/UI/button";
import Input from "./componand/UI/input";

 const App = () => {

  const [isOpen, setIsOpen] = useState(false)
// 
  function open() {
    setIsOpen(true)
  }
// 
  function close() {
    setIsOpen(false)
  }




  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product}/>)


  const renderFormInputList = formInputsList.map(input => (
    <div className="flex flex-col">
      <label htmlFor="input.id" className="md-[2px] text-sm font-medium text-gray-700">{input.lable}</label>
      <Input type="text" id={input.id} name={input.name}/>
    </div>
  )
  )

  return (
    <main className="container">
      <Button className="bg-red-600 hover:bg-red-800" onClick={open}>Add new Product</Button>
      <div className="border-2 border-red-500 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {renderProductList}
      </div>
      <Model isOpen={isOpen} onClose={close} title={"add new Product"}>

              <div className="space-y-3">
                 {renderFormInputList}
              </div>

          <div className="flex items-center space-x-3">
          <Button className="bg-indigo-600 ">Submit</Button>
          <Button className="bg-gray-800">Cancel</Button>
          </div>
      </Model>
    </main>
  )
}


export default App;