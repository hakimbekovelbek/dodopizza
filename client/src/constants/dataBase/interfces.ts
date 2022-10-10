export type Id={
    id:string|number
}

export interface Addons {
    id?:Id
    title: string
    img_url: string
    isChosen: boolean
    price: number |
        {
        small?: number
        medium?: number
        large?: number
    }
}

export interface Ingredients {
    id:Id
    title: string
    optional: boolean
    isChosen:boolean
}

export interface Types {
    id?:Id
    thin?: string
    normal?: string
}

export interface Nutrition {
    id?:Id
    calories?: number
    proteins?: number
    fats?: number
    carbohydrates?: number
    weight?: number
    diameter?: number
}

export interface Sizes {
    id?:Id
    small?: {
        price: number
        imgs?: Types
        nutrition: {
            normal?: Nutrition
        }
    }
    medium?: {
        price: number
        imgs?: Types
        nutrition: {
            thin?: Nutrition
            normal?: Nutrition
        }
    }
    large?: {
        price: number
        imgs?: Types
        nutrition: {
            thin?: Nutrition
            normal?: Nutrition
        }
    }
}

interface ButtonType{
    	title: string,
        buttonStyle: {
    		backgroundColor: string,
    		color:string,
    	}
}

export interface Product {
    id:Id 
    title: string
    img: string
    price: number
    sizes?: Sizes
    totalPrice?:number,
    description: string
    addons?: Array<any | boolean>
    buttonType?:ButtonType
}

export interface ComboProducts extends Product{
    products: Array<Array<any|number>>
}

export interface ComboProductTypes extends ComboProducts{
    realPrice:number
}

// export const ty=(type:string, products:Array<any>)=>{
//     switch (type){
//         case 'combo':
//             return ;
//         case 'pizza':
//             return Array<Product|ComboProducts>;
//         default:
//             return Array<Product>
//     }
// }

export interface ProductType {
    id:Id
    title: string
    type: string
    products: Array<Product|ComboProducts|ComboProductTypes>
}



