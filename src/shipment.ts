

export interface Shipment {
    name: string;
    packaging: "carton"  | "plastic" | "packet";
    count: number;
    
}