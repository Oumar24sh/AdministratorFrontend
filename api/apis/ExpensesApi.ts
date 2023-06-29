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


import * as runtime from '../runtime';
import type {
  CreateResponse,
  Expense,
  ExpenseResponse,
  ExpensesItemBody,
  ProblemDetails,
} from '../models/index';
import {
    CreateResponseFromJSON,
    CreateResponseToJSON,
    ExpenseFromJSON,
    ExpenseToJSON,
    ExpenseResponseFromJSON,
    ExpenseResponseToJSON,
    ExpensesItemBodyFromJSON,
    ExpensesItemBodyToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models/index';

export interface ApiExpensesAffAffRefGetRequest {
    affRef: string;
    expenseRef?: string;
}

export interface ApiExpensesAffAffRefPostRequest {
    affRef: string;
    expensesItemBody?: ExpensesItemBody;
}

export interface ApiExpensesAfmGetRequest {
    expenseRef?: string;
}

export interface ApiExpensesAfmPostRequest {
    expensesItemBody?: ExpensesItemBody;
}

/**
 * 
 */
export class ExpensesApi extends runtime.BaseAPI {

    /**
     */
    async apiCalcGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/calc`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async apiCalcGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.apiCalcGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiExpensesAffAffRefGetRaw(requestParameters: ApiExpensesAffAffRefGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpenseResponse>> {
        if (requestParameters.affRef === null || requestParameters.affRef === undefined) {
            throw new runtime.RequiredError('affRef','Required parameter requestParameters.affRef was null or undefined when calling apiExpensesAffAffRefGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.expenseRef !== undefined) {
            queryParameters['ExpenseRef'] = requestParameters.expenseRef;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Expenses/Aff/{affRef}`.replace(`{${"affRef"}}`, encodeURIComponent(String(requestParameters.affRef))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpenseResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiExpensesAffAffRefGet(requestParameters: ApiExpensesAffAffRefGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpenseResponse> {
        const response = await this.apiExpensesAffAffRefGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiExpensesAffAffRefPostRaw(requestParameters: ApiExpensesAffAffRefPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.affRef === null || requestParameters.affRef === undefined) {
            throw new runtime.RequiredError('affRef','Required parameter requestParameters.affRef was null or undefined when calling apiExpensesAffAffRefPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Expenses/Aff/{affRef}`.replace(`{${"affRef"}}`, encodeURIComponent(String(requestParameters.affRef))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExpensesItemBodyToJSON(requestParameters.expensesItemBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiExpensesAffAffRefPost(requestParameters: ApiExpensesAffAffRefPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.apiExpensesAffAffRefPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiExpensesAfmGetRaw(requestParameters: ApiExpensesAfmGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpenseResponse>> {
        const queryParameters: any = {};

        if (requestParameters.expenseRef !== undefined) {
            queryParameters['ExpenseRef'] = requestParameters.expenseRef;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Expenses/Afm`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpenseResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiExpensesAfmGet(requestParameters: ApiExpensesAfmGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpenseResponse> {
        const response = await this.apiExpensesAfmGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiExpensesAfmPostRaw(requestParameters: ApiExpensesAfmPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Expenses/Afm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExpensesItemBodyToJSON(requestParameters.expensesItemBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiExpensesAfmPost(requestParameters: ApiExpensesAfmPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.apiExpensesAfmPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiExpensesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Expense>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/expenses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExpenseFromJSON));
    }

    /**
     */
    async apiExpensesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Expense>> {
        const response = await this.apiExpensesGetRaw(initOverrides);
        return await response.value();
    }

}
