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
import type { Aff } from './Aff';
import {
    AffFromJSON,
    AffFromJSONTyped,
    AffToJSON,
} from './Aff';
import type { AffExpenseItemsVersion } from './AffExpenseItemsVersion';
import {
    AffExpenseItemsVersionFromJSON,
    AffExpenseItemsVersionFromJSONTyped,
    AffExpenseItemsVersionToJSON,
} from './AffExpenseItemsVersion';
import type { Expense } from './Expense';
import {
    ExpenseFromJSON,
    ExpenseFromJSONTyped,
    ExpenseToJSON,
} from './Expense';

/**
 * 
 * @export
 * @interface AffExpenseItem
 */
export interface AffExpenseItem {
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    rate?: number;
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    derivedValue?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    derivedMultiplier?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    affId?: number;
    /**
     * 
     * @type {Aff}
     * @memberof AffExpenseItem
     */
    aff?: Aff;
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    expenseId?: number;
    /**
     * 
     * @type {Expense}
     * @memberof AffExpenseItem
     */
    expense?: Expense;
    /**
     * 
     * @type {number}
     * @memberof AffExpenseItem
     */
    affExpenseItemsVersionId?: number;
    /**
     * 
     * @type {AffExpenseItemsVersion}
     * @memberof AffExpenseItem
     */
    affExpenseItemsVersion?: AffExpenseItemsVersion;
    /**
     * 
     * @type {Date}
     * @memberof AffExpenseItem
     */
    createdAt?: Date | null;
}

/**
 * Check if a given object implements the AffExpenseItem interface.
 */
export function instanceOfAffExpenseItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AffExpenseItemFromJSON(json: any): AffExpenseItem {
    return AffExpenseItemFromJSONTyped(json, false);
}

export function AffExpenseItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AffExpenseItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'rate': !exists(json, 'rate') ? undefined : json['rate'],
        'derivedValue': !exists(json, 'derivedValue') ? undefined : json['derivedValue'],
        'derivedMultiplier': !exists(json, 'derivedMultiplier') ? undefined : json['derivedMultiplier'],
        'affId': !exists(json, 'affId') ? undefined : json['affId'],
        'aff': !exists(json, 'aff') ? undefined : AffFromJSON(json['aff']),
        'expenseId': !exists(json, 'expenseId') ? undefined : json['expenseId'],
        'expense': !exists(json, 'expense') ? undefined : ExpenseFromJSON(json['expense']),
        'affExpenseItemsVersionId': !exists(json, 'affExpenseItemsVersionId') ? undefined : json['affExpenseItemsVersionId'],
        'affExpenseItemsVersion': !exists(json, 'affExpenseItemsVersion') ? undefined : AffExpenseItemsVersionFromJSON(json['affExpenseItemsVersion']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (json['createdAt'] === null ? null : new Date(json['createdAt'])),
    };
}

export function AffExpenseItemToJSON(value?: AffExpenseItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'rate': value.rate,
        'derivedValue': value.derivedValue,
        'derivedMultiplier': value.derivedMultiplier,
        'affId': value.affId,
        'aff': AffToJSON(value.aff),
        'expenseId': value.expenseId,
        'expense': ExpenseToJSON(value.expense),
        'affExpenseItemsVersionId': value.affExpenseItemsVersionId,
        'affExpenseItemsVersion': AffExpenseItemsVersionToJSON(value.affExpenseItemsVersion),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt === null ? null : value.createdAt.toISOString()),
    };
}
