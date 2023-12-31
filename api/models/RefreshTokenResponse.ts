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
 * @interface RefreshTokenResponse
 */
export interface RefreshTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    refreshToken?: string | null;
}

/**
 * Check if a given object implements the RefreshTokenResponse interface.
 */
export function instanceOfRefreshTokenResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RefreshTokenResponseFromJSON(json: any): RefreshTokenResponse {
    return RefreshTokenResponseFromJSONTyped(json, false);
}

export function RefreshTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function RefreshTokenResponseToJSON(value?: RefreshTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

