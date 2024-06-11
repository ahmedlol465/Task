export interface IProdact {
    id?: string
    title: string
    description: string
    imageURL: string
    price: string
    colors: string[]
    catagory: {
        name: string
        imageURl: string
    }
}

export interface IFormInput {
    id: string
    name: "title" | 'description' | "imageURL"  | "price" ;
    lable: string
    type: string
}