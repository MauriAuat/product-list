export interface Product {
    id_producto: number;
    nombre: string;
    imagenes:[{
        nombre:string;
    }];
    precio:number;
    cantidad:number;
    id_subcategoria: number;
    vendible: boolean;
    stock:number;
    iva: number;
}