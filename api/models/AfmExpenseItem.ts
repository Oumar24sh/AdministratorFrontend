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
import type { Afm } from './Afm';
import {
    AfmFromJSON,
    AfmFromJSONTyped,
    AfmToJSON,
} from './Afm';
import type { AfmExpenseItemsVersion } from './AfmExpenseItemsVersion';
import {
    AfmExpenseItemsVersionFromJSON,
    AfmExpenseItemsVersionFromJSONTyped,
    AfmExpenseItemsVersionToJSON,
} from './AfmExpenseItemsVersion';
import type { Expense } from './Expense';
import {
    ExpenseFromJSON,
    ExpenseFromJSONTyped,
    ExpenseToJSON,
} from './Expense';

/**
 * 
 * @export
 * @interface AfmExpenseItem
 */
export interface AfmExpenseItem {
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    afmId?: number;
    /**
     * 
     * @type {Afm}
     * @memberof AfmExpenseItem
     */
    afm?: Afm;
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    expenseId?: number;
    /**
     * 
     * @type {Expense}
     * @memberof AfmExpenseItem
     */
    expense?: Expense;
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    rate?: number;
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    derivedValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    derivedMultiplier?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AfmExpenseItem
     */
    afmExpenseItemsVersionId?: number;
    /**
     * 
     * @type {AfmExpenseItemsVersion}
     * @memberof AfmExpenseItem
     */
    afmExpenseItemsVersion?: AfmExpenseItemsVersion;
    /**
     * 
     * @type {Date}
     * @memberof AfmExpenseItem
     */
    createdAt?: Date | null;
}

/**
 * Check if a given object implements the AfmExpenseItem interface.
 */
export function instanceOfAfmExpenseItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AfmExpenseItemFromJSON(json: any): AfmExpenseItem {
    return AfmExpenseItemFromJSONTyped(json, false);
}

export function AfmExpenseItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AfmExpenseItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'afmId': !exists(json, 'afmId') ? undefined : json['afmId'],
        'afm': !exists(json, 'afm') ? undefined : AfmFromJSON(json['afm']),
        'expenseId': !exists(json, 'expenseId') ? undefined : json['expenseId'],
        'expense': !exists(json, 'expense') ? undefined : ExpenseFromJSON(json['expense']),
        'rate': !exists(json, 'rate') ? undefined : json['rate'],
        'derivedValue': !exists(json, 'derivedValue') ? undefined : json['derivedValue'],
        'derivedMultiplier': !exists(json, 'derivedMultiplier') ? undefined : json['derivedMultiplier'],
        'afmExpenseItemsVersionId': !exists(json, 'afmExpenseItemsVersionId') ? undefined : json['afmExpenseItemsVersionId'],
        'afmExpenseItemsVersion': !exists(json, 'afmExpenseItemsVersion') ? undefined : AfmExpenseItemsVersionFromJSON(json['afmExpenseItemsVersion']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (json['createdAt'] === null ? null : new Date(json['createdAt'])),
    };
}

export function AfmExpenseItemToJSON(value?: AfmExpenseItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'afmId': value.afmId,
        'afm': AfmToJSON(value.afm),
        'expenseId': value.expenseId,
        'expense': ExpenseToJSON(value.expense),
        'rate': value.rate,
        'derivedValue': value.derivedValue,
        'derivedMultiplier': value.derivedMultiplier,
        'afmExpenseItemsVersionId': value.afmExpenseItemsVersionId,
        'afmExpenseItemsVersion': AfmExpenseItemsVersionToJSON(value.afmExpenseItemsVersion),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt === null ? null : value.createdAt.toISOString()),
    };
}

