import { ChangeEvent, FormEvent, useState } from "react";
import Model from "./componand/UI/Model";
import { formInputsList, productList } from "./componand/data";
import ProductCard from "./componand/product"
import Button  from "./componand/UI/button";
import Input from "./componand/UI/input";
import { IProdact } from "./componand/interfaces";
import { productValidation } from "./validation";
import ErrorMeassage from "./componand/ErrorMessage";

 const App = () => {


    const defaultProduct = {
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      catagory: {
        name: "",
        imageURl: ""
      }
    }


const [errors, setErrors] = useState({
  title: "",
  description: "",
  imageURL: "",
  price: ""})


  const [product, setProduct] = useState<IProdact>(defaultProduct)


  const [isOpen, setIsOpen] = useState(false)
// 
  function open() {
    setIsOpen(true)
  }
// 
  function close() {
    setIsOpen(false)
  }


  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setProduct ({
      ...product,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })


  }




  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()


      // make a validation 
      const errors = productValidation({
        title: product.title,
        description: product.description,
        price: product.price,
        imageURL: product.imageURL
      })
// console.log(errors);


        const hsErrorMsg = 
        Object.values(errors).some(value => value === "") &&  Object.values(errors).every(value => value === "")
      
          if(!hsErrorMsg) {
            setErrors(errors);
            return ;
          }


      console.log(hsErrorMsg);
      
      
  }

  const onCancel = () => {
    console.log("cancel");
    setProduct(defaultProduct)
    close()
    
  }


  
  



  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product}/>)



  
  const renderFormInputList = formInputsList.map(input => (

    <div className="flex flex-col" key={input.id}>
      <label htmlFor="input.id" className="md-[2px] text-sm font-medium text-gray-700">{input.lable}</label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>


{/* console.log(input.name); */}

    <ErrorMeassage msg={errors[input.name]}/>



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

        <form className="space-y-3" onSubmit={submitHandler}>
                {renderFormInputList}
             

          <div className="flex items-center space-x-3">
          <Button className="bg-indigo-600 ">Submit</Button>
          <Button className="bg-gray-800" onClick={onCancel}>Cancel</Button>
          </div>
          </form>
      </Model>
    </main>
  )
}


export default App;