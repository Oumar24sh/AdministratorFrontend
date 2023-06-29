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
  RefreshTokenResponse,
} from '../models/index';
import {
    RefreshTokenResponseFromJSON,
    RefreshTokenResponseToJSON,
} from '../models/index';

export interface ApiRefreshTokenRefreshTokenPostRequest {
    refreshTokenResponse?: RefreshTokenResponse;
}

export interface ApiRefreshTokenRevokeUsernamePostRequest {
    username: string;
}

/**
 * 
 */
export class RefreshTokenApi extends runtime.BaseAPI {

    /**
     */
    async apiRefreshTokenRefreshTokenPostRaw(requestParameters: ApiRefreshTokenRefreshTokenPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/api/RefreshToken/refresh-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefreshTokenResponseToJSON(requestParameters.refreshTokenResponse),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiRefreshTokenRefreshTokenPost(requestParameters: ApiRefreshTokenRefreshTokenPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRefreshTokenRefreshTokenPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiRefreshTokenRevokeAllPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/api/RefreshToken/revoke-all`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiRefreshTokenRevokeAllPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRefreshTokenRevokeAllPostRaw(initOverrides);
    }

    /**
     */
    async apiRefreshTokenRevokeUsernamePostRaw(requestParameters: ApiRefreshTokenRevokeUsernamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling apiRefreshTokenRevokeUsernamePost.');
        }

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
            path: `/api/RefreshToken/revoke/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiRefreshTokenRevokeUsernamePost(requestParameters: ApiRefreshTokenRevokeUsernamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRefreshTokenRevokeUsernamePostRaw(requestParameters, initOverrides);
    }

}