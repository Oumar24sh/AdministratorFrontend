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
import type { ExpenseItem } from './ExpenseItem';
import {
    ExpenseItemFromJSON,
    ExpenseItemFromJSONTyped,
    ExpenseItemToJSON,
} from './ExpenseItem';

/**
 * 
 * @export
 * @interface ExpensesItemBody
 */
export interface ExpensesItemBody {
    /**
     * 
     * @type {Array<ExpenseItem>}
     * @memberof ExpensesItemBody
     */
    expenses?: Array<ExpenseItem> | null;
    /**
     * 
     * @type {string}
     * @memberof ExpensesItemBody
     */
    expenseConfigName?: string | null;
}

/**
 * Check if a given object implements the ExpensesItemBody interface.
 */
export function instanceOfExpensesItemBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExpensesItemBodyFromJSON(json: any): ExpensesItemBody {
    return ExpensesItemBodyFromJSONTyped(json, false);
}

export function ExpensesItemBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpensesItemBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expenses': !exists(json, 'expenses') ? undefined : (json['expenses'] === null ? null : (json['expenses'] as Array<any>).map(ExpenseItemFromJSON)),
        'expenseConfigName': !exists(json, 'expenseConfigName') ? undefined : json['expenseConfigName'],
    };
}

export function ExpensesItemBodyToJSON(value?: ExpensesItemBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expenses': value.expenses === undefined ? undefined : (value.expenses === null ? null : (value.expenses as Array<any>).map(ExpenseItemToJSON)),
        'expenseConfigName': value.expenseConfigName,
    };
}
