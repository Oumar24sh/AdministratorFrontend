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
 * @interface PlotBody
 */
export interface PlotBody {
    /**
     * 
     * @type {number}
     * @memberof PlotBody
     */
    plotStatusId?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotBody
     */
    approverId?: number;
}

/**
 * Check if a given object implements the PlotBody interface.
 */
export function instanceOfPlotBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlotBodyFromJSON(json: any): PlotBody {
    return PlotBodyFromJSONTyped(json, false);
}

export function PlotBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'plotStatusId': !exists(json, 'plotStatusId') ? undefined : json['plotStatusId'],
        'approverId': !exists(json, 'approverId') ? undefined : json['approverId'],
    };
}

export function PlotBodyToJSON(value?: PlotBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'plotStatusId': value.plotStatusId,
        'approverId': value.approverId,
    };
}

