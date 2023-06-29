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
 * @interface AffCalculationVersion
 */
export interface AffCalculationVersion {
    /**
     * 
     * @type {number}
     * @memberof AffCalculationVersion
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AffCalculationVersion
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AffCalculationVersion
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof AffCalculationVersion
     */
    createdAt?: Date | null;
}

/**
 * Check if a given object implements the AffCalculationVersion interface.
 */
export function instanceOfAffCalculationVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AffCalculationVersionFromJSON(json: any): AffCalculationVersion {
    return AffCalculationVersionFromJSONTyped(json, false);
}

export function AffCalculationVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AffCalculationVersion {
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

export function AffCalculationVersionToJSON(value?: AffCalculationVersion | null): any {
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

