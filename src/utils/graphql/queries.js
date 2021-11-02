import { gql } from "@apollo/client"

export const GET_CONTACTS = gql`
    query {
        contacts {
            id
            first_name
            last_name
            phone_number
            city
            address
            created_at
        }
    }
`;


export const GET_CONTACTS_BY_ID = gql`
    query ($user_id: Int!){
        contacts(where: { user_id: { _eq: $user_id } }) {
            id
            first_name
            last_name
            phone_number
            city
            address
        }
    }
`;

export const ADD_CONTACT = gql`
    mutation (
        $first_name: String!, 
        $last_name: String!, 
        $phone_number: String!, 
        $city: String!, 
        $address: String!
        ) {
        insert_contacts(objects: [{ first_name: $first_name, last_name: $last_name, phone_number: $phone_number, city: $city, address: $address}]) {
            returning {
                id
                first_name
                last_name
                phone_number
                city
                address
            }
        }
    }
`;



// export const UPDATE_CONTACT = gql`
//     mutation ($id: Int!, $first_name: String!, $last_name: String!, $phone_number: !String, $city: !String, $address: !String) {
//         update_contacts_by_pk(
//             pk_columns: { id:$id}
//             _set: { first_name: $first_name, last_name: $last_name, phone_number: $phone_number, city: $city, address: $address }
//         ) {
//             id
//         }
//     }
// `;

export const REMOVE_CONTACT = gql`
    mutation ($id: Int!) {
        delete_contacts_by_pk(id: $id) {
            id
        }
    }
`;