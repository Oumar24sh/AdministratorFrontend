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
import type { AffCalculation } from './AffCalculation';
import {
    AffCalculationFromJSON,
    AffCalculationFromJSONTyped,
    AffCalculationToJSON,
} from './AffCalculation';

/**
 * 
 * @export
 * @interface DashboardResponse
 */
export interface DashboardResponse {
    /**
     * 
     * @type {Array<AffCalculation>}
     * @memberof DashboardResponse
     */
    affData?: Array<AffCalculation> | null;
}

/**
 * Check if a given object implements the DashboardResponse interface.
 */
export function instanceOfDashboardResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DashboardResponseFromJSON(json: any): DashboardResponse {
    return DashboardResponseFromJSONTyped(json, false);
}

export function DashboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affData': !exists(json, 'affData') ? undefined : (json['affData'] === null ? null : (json['affData'] as Array<any>).map(AffCalculationFromJSON)),
    };
}

export function DashboardResponseToJSON(value?: DashboardResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affData': value.affData === undefined ? undefined : (value.affData === null ? null : (value.affData as Array<any>).map(AffCalculationToJSON)),
    };
}

