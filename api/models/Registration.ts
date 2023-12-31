/* tslint:disable */
/* eslint-disable */
/**
 * Beau Plan Administrator\'s API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Registration
 */
export interface Registration {
    /**
     * 
     * @type {string}
     * @memberof Registration
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof Registration
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Registration
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Registration
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Registration
     */
    password: string;
}

/**
 * Check if a given object implements the Registration interface.
 */
export function instanceOfRegistration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function RegistrationFromJSON(json: any): Registration {
    return RegistrationFromJSONTyped(json, false);
}

export function RegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Registration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'firstName': json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function RegistrationToJSON(value?: Registration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'password': value.password,
    };
}

