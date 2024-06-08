export interface IProdact {
    id?: string
    tittle: string
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
    name: string
    lable: string
    type: string
}