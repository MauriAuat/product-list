export interface Product {
    id: number;
    nombre: string;
    imagenes:[{
        nombre:string;
    }];
    precio:number;
    id_subcategoria: number;
    vendible: boolean;
    stock:number;
    iva: number;
}