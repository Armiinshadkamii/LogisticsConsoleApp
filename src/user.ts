import { Shipment } from "./shipment";

export interface User {
    id: string;
    name: string;
    lastName: string;
    phone:string;
}

async function registerShipment(params:Shipment): Promise<User> {
    
}