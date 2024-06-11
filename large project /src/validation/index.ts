export const productValidation = (product: { title: string, description: string, price: string, imageURL: string}) => {
    
    // console.log(product);
    
    const ERRORS: {title: string, description: string, price: string, imageURL: string} = {
        title: "",
        description: "",
        price: "",
        imageURL: "",
    }

    const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);


    if(!product.title.trim() || product.title.length < 3  || product.title.length > 80){
        ERRORS.title = "NOT VALID TITLE"
    }

    if(!product.description.trim() || product.description.length < 3  || product.description.length > 80){
        ERRORS.description = "NOT VALID DESCRIPTION"
    }



    if(!product.imageURL.trim() || !validURL){
        ERRORS.imageURL = "NOT VALID IMAGE URL"
    }


    if(!product.price.trim() || isNaN(Number(product.price)) ){
        ERRORS.price = "NOT VALID PRICE"
    }





    return ERRORS;
}