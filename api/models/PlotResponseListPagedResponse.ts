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
import type { PlotResponse } from './PlotResponse';
import {
    PlotResponseFromJSON,
    PlotResponseFromJSONTyped,
    PlotResponseToJSON,
} from './PlotResponse';

/**
 * 
 * @export
 * @interface PlotResponseListPagedResponse
 */
export interface PlotResponseListPagedResponse {
    /**
     * 
     * @type {Array<PlotResponse>}
     * @memberof PlotResponseListPagedResponse
     */
    data?: Array<PlotResponse> | null;
    /**
     * 
     * @type {boolean}
     * @memberof PlotResponseListPagedResponse
     */
    succeeded?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlotResponseListPagedResponse
     */
    errors?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PlotResponseListPagedResponse
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlotResponseListPagedResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponseListPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {string}
     * @memberof PlotResponseListPagedResponse
     */
    firstPage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlotResponseListPagedResponse
     */
    lastPage?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlotResponseListPagedResponse
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponseListPagedResponse
     */
    totalRecords?: number;
    /**
     * 
     * @type {string}
     * @memberof PlotResponseListPagedResponse
     */
    nextPage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlotResponseListPagedResponse
     */
    previousPage?: string | null;
}

/**
 * Check if a given object implements the PlotResponseListPagedResponse interface.
 */
export function instanceOfPlotResponseListPagedResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlotResponseListPagedResponseFromJSON(json: any): PlotResponseListPagedResponse {
    return PlotResponseListPagedResponseFromJSONTyped(json, false);
}

export function PlotResponseListPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotResponseListPagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(PlotResponseFromJSON)),
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'firstPage': !exists(json, 'firstPage') ? undefined : json['firstPage'],
        'lastPage': !exists(json, 'lastPage') ? undefined : json['lastPage'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalRecords': !exists(json, 'totalRecords') ? undefined : json['totalRecords'],
        'nextPage': !exists(json, 'nextPage') ? undefined : json['nextPage'],
        'previousPage': !exists(json, 'previousPage') ? undefined : json['previousPage'],
    };
}

export function PlotResponseListPagedResponseToJSON(value?: PlotResponseListPagedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(PlotResponseToJSON)),
        'succeeded': value.succeeded,
        'errors': value.errors,
        'message': value.message,
        'pageNumber': value.pageNumber,
        'pageSize': value.pageSize,
        'firstPage': value.firstPage,
        'lastPage': value.lastPage,
        'totalPages': value.totalPages,
        'totalRecords': value.totalRecords,
        'nextPage': value.nextPage,
        'previousPage': value.previousPage,
    };
}

