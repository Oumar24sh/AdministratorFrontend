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
 * @interface PlotResponse
 */
export interface PlotResponse {
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PlotResponse
     */
    hasCoproperty?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PlotResponse
     */
    ref?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    affId?: number;
    /**
     * 
     * @type {string}
     * @memberof PlotResponse
     */
    affRef?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    gisArea?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    far?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    usage?: number;
    /**
     * 
     * @type {string}
     * @memberof PlotResponse
     */
    plotDestination?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    plotDestinationId?: number;
    /**
     * 
     * @type {string}
     * @memberof PlotResponse
     */
    plotStatusName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlotResponse
     */
    plotStatusRef?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    plotStatusId?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    sCoefficient?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    gCoefficient?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    weightedArea?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    gfa?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    tantiemesAFMVotes?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    tantiemesAFFVotes?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    tantiemesAFMCharges?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    tantiemesAFFCharges?: number;
    /**
     * 
     * @type {number}
     * @memberof PlotResponse
     */
    affCharges?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PlotResponse
     */
    active?: boolean | null;
}

/**
 * Check if a given object implements the PlotResponse interface.
 */
export function instanceOfPlotResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlotResponseFromJSON(json: any): PlotResponse {
    return PlotResponseFromJSONTyped(json, false);
}

export function PlotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasCoproperty': !exists(json, 'hasCoproperty') ? undefined : json['hasCoproperty'],
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
        'affId': !exists(json, 'affId') ? undefined : json['affId'],
        'affRef': !exists(json, 'affRef') ? undefined : json['affRef'],
        'gisArea': !exists(json, 'gisArea') ? undefined : json['gisArea'],
        'far': !exists(json, 'far') ? undefined : json['far'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'plotDestination': !exists(json, 'plotDestination') ? undefined : json['plotDestination'],
        'plotDestinationId': !exists(json, 'plotDestinationId') ? undefined : json['plotDestinationId'],
        'plotStatusName': !exists(json, 'plotStatusName') ? undefined : json['plotStatusName'],
        'plotStatusRef': !exists(json, 'plotStatusRef') ? undefined : json['plotStatusRef'],
        'plotStatusId': !exists(json, 'plotStatusId') ? undefined : json['plotStatusId'],
        'sCoefficient': !exists(json, 'sCoefficient') ? undefined : json['sCoefficient'],
        'gCoefficient': !exists(json, 'gCoefficient') ? undefined : json['gCoefficient'],
        'weightedArea': !exists(json, 'weightedArea') ? undefined : json['weightedArea'],
        'gfa': !exists(json, 'gfa') ? undefined : json['gfa'],
        'tantiemesAFMVotes': !exists(json, 'tantiemesAFMVotes') ? undefined : json['tantiemesAFMVotes'],
        'tantiemesAFFVotes': !exists(json, 'tantiemesAFFVotes') ? undefined : json['tantiemesAFFVotes'],
        'tantiemesAFMCharges': !exists(json, 'tantiemesAFMCharges') ? undefined : json['tantiemesAFMCharges'],
        'tantiemesAFFCharges': !exists(json, 'tantiemesAFFCharges') ? undefined : json['tantiemesAFFCharges'],
        'affCharges': !exists(json, 'affCharges') ? undefined : json['affCharges'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function PlotResponseToJSON(value?: PlotResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'hasCoproperty': value.hasCoproperty,
        'ref': value.ref,
        'affId': value.affId,
        'affRef': value.affRef,
        'gisArea': value.gisArea,
        'far': value.far,
        'usage': value.usage,
        'plotDestination': value.plotDestination,
        'plotDestinationId': value.plotDestinationId,
        'plotStatusName': value.plotStatusName,
        'plotStatusRef': value.plotStatusRef,
        'plotStatusId': value.plotStatusId,
        'sCoefficient': value.sCoefficient,
        'gCoefficient': value.gCoefficient,
        'weightedArea': value.weightedArea,
        'gfa': value.gfa,
        'tantiemesAFMVotes': value.tantiemesAFMVotes,
        'tantiemesAFFVotes': value.tantiemesAFFVotes,
        'tantiemesAFMCharges': value.tantiemesAFMCharges,
        'tantiemesAFFCharges': value.tantiemesAFFCharges,
        'affCharges': value.affCharges,
        'active': value.active,
    };
}

