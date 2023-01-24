export declare interface TransportOptionz {
    host: string;
    port: number;
    secure?: boolean;
    auth: {
        user: string
        pass: string
    }
}