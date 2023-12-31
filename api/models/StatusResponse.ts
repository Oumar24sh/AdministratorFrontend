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
 * @interface StatusResponse
 */
export interface StatusResponse {
    /**
     * 
     * @type {number}
     * @memberof StatusResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    ref?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StatusResponse
     */
    label?: string | null;
}

/**
 * Check if a given object implements the StatusResponse interface.
 */
export function instanceOfStatusResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatusResponseFromJSON(json: any): StatusResponse {
    return StatusResponseFromJSONTyped(json, false);
}

export function StatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function StatusResponseToJSON(value?: StatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'displayName': value.displayName,
        'ref': value.ref,
        'label': value.label,
    };
}

