/*export interface Child {
    name: string;
    age: number
}*/

export interface Passenger {
    id: number,
    fullname: string;
    checkedIn: boolean;
    checkInDate?: number; // added for worke with Pipes
    baggage: string;
    // children: Child[] | null
}