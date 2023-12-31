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
 * @interface ChangeRequestResponse
 */
export interface ChangeRequestResponse {
    /**
     * 
     * @type {number}
     * @memberof ChangeRequestResponse
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeRequestResponse
     */
    approverId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    requestorId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ChangeRequestResponse
     */
    statusId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    statusName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    approverUserId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    approverName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    requestorName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ChangeRequestResponse
     */
    plotVersionId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    plotStatusName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    plotStatusRef?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    plotRef?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    oldPlotStatusName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeRequestResponse
     */
    oldPlotStatusRef?: string | null;
}

/**
 * Check if a given object implements the ChangeRequestResponse interface.
 */
export function instanceOfChangeRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeRequestResponseFromJSON(json: any): ChangeRequestResponse {
    return ChangeRequestResponseFromJSONTyped(json, false);
}

export function ChangeRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'approverId': !exists(json, 'approverId') ? undefined : json['approverId'],
        'requestorId': !exists(json, 'requestorId') ? undefined : json['requestorId'],
        'statusId': !exists(json, 'statusId') ? undefined : json['statusId'],
        'statusName': !exists(json, 'statusName') ? undefined : json['statusName'],
        'approverUserId': !exists(json, 'approverUserId') ? undefined : json['approverUserId'],
        'approverName': !exists(json, 'approverName') ? undefined : json['approverName'],
        'requestorName': !exists(json, 'requestorName') ? undefined : json['requestorName'],
        'plotVersionId': !exists(json, 'plotVersionId') ? undefined : json['plotVersionId'],
        'plotStatusName': !exists(json, 'plotStatusName') ? undefined : json['plotStatusName'],
        'plotStatusRef': !exists(json, 'plotStatusRef') ? undefined : json['plotStatusRef'],
        'plotRef': !exists(json, 'plotRef') ? undefined : json['plotRef'],
        'oldPlotStatusName': !exists(json, 'oldPlotStatusName') ? undefined : json['oldPlotStatusName'],
        'oldPlotStatusRef': !exists(json, 'oldPlotStatusRef') ? undefined : json['oldPlotStatusRef'],
    };
}

export function ChangeRequestResponseToJSON(value?: ChangeRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'approverId': value.approverId,
        'requestorId': value.requestorId,
        'statusId': value.statusId,
        'statusName': value.statusName,
        'approverUserId': value.approverUserId,
        'approverName': value.approverName,
        'requestorName': value.requestorName,
        'plotVersionId': value.plotVersionId,
        'plotStatusName': value.plotStatusName,
        'plotStatusRef': value.plotStatusRef,
        'plotRef': value.plotRef,
        'oldPlotStatusName': value.oldPlotStatusName,
        'oldPlotStatusRef': value.oldPlotStatusRef,
    };
}

