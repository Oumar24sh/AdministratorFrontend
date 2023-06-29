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
 * @interface CopropertyVersion
 */
export interface CopropertyVersion {
    /**
     * 
     * @type {number}
     * @memberof CopropertyVersion
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CopropertyVersion
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CopropertyVersion
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof CopropertyVersion
     */
    createdAt?: Date | null;
}

/**
 * Check if a given object implements the CopropertyVersion interface.
 */
export function instanceOfCopropertyVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopropertyVersionFromJSON(json: any): CopropertyVersion {
    return CopropertyVersionFromJSONTyped(json, false);
}

export function CopropertyVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopropertyVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (json['createdAt'] === null ? null : new Date(json['createdAt'])),
    };
}

export function CopropertyVersionToJSON(value?: CopropertyVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'version': value.version,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt === null ? null : value.createdAt.toISOString()),
    };
}

