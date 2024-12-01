import { Distrito } from "@/hooks/useDistritos";

export interface Shipping {
    first_name: string;
    last_name: string;
    address: string;
    reference: string;
    phone: string;
    district: Distrito|null
};