import { txtSlicer } from "../utils/function";
import Button from "./UI/button";
import Image from "./image";
import { IProdact } from "./interfaces/index";

interface IProps {
    product: IProdact
}


const ProductCard = ({product}: IProps) => {


    const {description} = product


    return (
    <div className="mx-w-sm md:mx-w-lg mx-auto md:mx-0 border rounded-md text-sm p-3 flex flex-col">

        <Image imageUrl="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt={"productName"}
                className="rounded-md"/>

        <h3 className="text-lg font-bold font-sams">{product.tittle}</h3>

        <p>{txtSlicer(description)}</p>


        <div className="flex items-center my-3 space-x-2">
             <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>    
             <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>    
             <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>    
        </div>


        <div className="flex items-center justify-between">
            <span>{product.price}</span>

            <Image imageUrl="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt={"productName"}
                className="w-10 h-10 rounded-full object-cover"/>
        </div>


        <div className="flex items-center justify-between space-x-2 mt-2">
            <Button className="bg-yellow-600" onClick={() => {
                
            }}>Save</Button>
            <Button className="bg-indigo-600 ">Edit</Button>
            <Button className="bg-red-600">Delete</Button>

        </div>
    </div>
    )
}


export default ProductCard;