export declare const schemaApiCall: {
    created_at: {
        type: DateConstructor;
        index: boolean;
    };
    connection_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
        index: boolean;
    };
    external_xref: {
        type: StringConstructor;
        index: boolean;
    };
    name: {
        type: StringConstructor;
        index: boolean;
    };
    path: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
    };
    status: {
        type: StringConstructor;
        index: boolean;
    };
    error: {
        type: StringConstructor;
    };
    ip_address: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        enum: string[];
    };
    method: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        index: boolean;
        default: string;
    };
    webhook_id: {
        type: any;
        ref: string;
    };
    is_billable: {
        type: BooleanConstructor;
    };
};
export declare const schemaConnectionAuth: {
    token: {
        type: StringConstructor;
    };
    access_token: {
        type: StringConstructor;
    };
    refresh_token: {
        type: StringConstructor;
    };
    expiry_date: {
        type: DateConstructor;
    };
    expires_in: {
        type: NumberConstructor;
    };
    emails: {
        type: StringConstructor[];
    };
    name: {
        type: StringConstructor;
    };
    app_id: {
        type: StringConstructor;
    };
    client_id: {
        type: StringConstructor;
    };
    client_secret: {
        type: StringConstructor;
    };
    consumer_key: {
        type: StringConstructor;
    };
    consumer_secret: {
        type: StringConstructor;
    };
    meta: {
        type: ObjectConstructor;
    };
    state: {
        type: StringConstructor;
    };
    other_auth_info: {
        type: StringConstructor[];
    };
    api_url: {
        type: StringConstructor;
    };
    authorize_url: {
        type: StringConstructor;
    };
    token_url: {
        type: StringConstructor;
    };
    pem: {
        type: StringConstructor;
    };
    key: {
        type: StringConstructor;
    };
    refresh_token_expires_in: {
        type: NumberConstructor;
    };
    refresh_token_expires_date: {
        type: DateConstructor;
    };
    dev_api_key: {
        type: StringConstructor;
    };
};
export declare const schemaConnection: {
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
        index: boolean;
    };
    external_xref: {
        type: StringConstructor;
        index: boolean;
    };
    permissions: {
        type: StringConstructor[];
        enum: string[];
    };
    categories: {
        type: StringConstructor[];
        enum: string[];
        index: boolean;
    };
    auth: {
        type: {
            token: {
                type: StringConstructor;
            };
            access_token: {
                type: StringConstructor;
            };
            refresh_token: {
                type: StringConstructor;
            };
            expiry_date: {
                type: DateConstructor;
            };
            expires_in: {
                type: NumberConstructor;
            };
            emails: {
                type: StringConstructor[];
            };
            name: {
                type: StringConstructor;
            };
            app_id: {
                type: StringConstructor;
            };
            client_id: {
                type: StringConstructor;
            };
            client_secret: {
                type: StringConstructor;
            };
            consumer_key: {
                type: StringConstructor;
            };
            consumer_secret: {
                type: StringConstructor;
            };
            meta: {
                type: ObjectConstructor;
            };
            state: {
                type: StringConstructor;
            };
            other_auth_info: {
                type: StringConstructor[];
            };
            api_url: {
                type: StringConstructor;
            };
            authorize_url: {
                type: StringConstructor;
            };
            token_url: {
                type: StringConstructor;
            };
            pem: {
                type: StringConstructor;
            };
            key: {
                type: StringConstructor;
            };
            refresh_token_expires_in: {
                type: NumberConstructor;
            };
            refresh_token_expires_date: {
                type: DateConstructor;
            };
            dev_api_key: {
                type: StringConstructor;
            };
        };
    };
    is_paused: {
        type: BooleanConstructor;
    };
    auth_aws_arn: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    last_healthy_at: {
        type: DateConstructor;
    };
    last_unhealthy_at: {
        type: DateConstructor;
    };
    cursors_cache: {
        type: ObjectConstructor[];
    };
};
export declare const schemaIntegrationSupport: {
    methods: {
        type: ObjectConstructor;
    };
    inbound_fields: {
        type: ObjectConstructor;
    };
    outbound_fields: {
        type: ObjectConstructor;
    };
    webhook_events: {
        type: ObjectConstructor[];
    };
    raw_objects: {
        type: StringConstructor[];
    };
    from_webhook: {
        type: StringConstructor;
        enum: string[];
    };
    list_sort_by_name: {
        type: StringConstructor;
        enum: string[];
    };
    list_sort_by_created_at: {
        type: StringConstructor;
        enum: string[];
    };
    list_sort_by_updated_at: {
        type: StringConstructor;
        enum: string[];
    };
    list_updated_gte: {
        type: StringConstructor;
        enum: string[];
    };
    list_user_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_customer_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_company_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_contact_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_application_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_candidate_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_deal_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_job_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_invoice_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_order: {
        type: StringConstructor;
        enum: string[];
    };
    list_query: {
        type: StringConstructor;
        enum: string[];
    };
    list_limit: {
        type: StringConstructor;
        enum: string[];
    };
    list_offset: {
        type: StringConstructor;
        enum: string[];
    };
    search_twitter: {
        type: StringConstructor;
        enum: string[];
    };
    search_name: {
        type: StringConstructor;
        enum: string[];
    };
    search_linkedinurl: {
        type: StringConstructor;
        enum: string[];
    };
    search_email: {
        type: StringConstructor;
        enum: string[];
    };
    search_domain: {
        type: StringConstructor;
        enum: string[];
    };
    list_parent_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_account_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_interview_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_list_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_ticket_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_collection_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_location_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_item_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_type: {
        type: StringConstructor;
        enum: string[];
    };
    list_space_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_channel_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_link_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_project_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_item_variant_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_raw_fields: {
        type: StringConstructor;
        enum: string[];
    };
};
export declare const schemaInvoice: {};
export declare const schemaIssue: {
    created_at: {
        type: StringConstructor;
    };
    updated_at: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    status: {
        type: StringConstructor;
        enum: string[];
    };
    url: {
        type: StringConstructor;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    type: {
        type: StringConstructor[];
    };
    resolution_time: {
        type: NumberConstructor;
    };
    ticket_ref: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
    };
    importance: {
        type: NumberConstructor;
    };
};
export declare const schemaNotification: {
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    description: {
        type: StringConstructor;
    };
    user_id: {
        type: any;
        ref: string;
    };
    user_name: {
        type: StringConstructor;
    };
    workspace_name: {
        type: StringConstructor;
    };
    webhook_id: {
        type: any;
        ref: string;
    };
    connection_id: {
        type: any;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
    };
    integration_name: {
        type: StringConstructor;
    };
    sent_at: {
        type: DateConstructor;
    };
    event: {
        type: StringConstructor;
        enum: string[];
    };
};
export declare const schemaUser: {
    name: {
        type: StringConstructor;
    };
    email: {
        type: StringConstructor;
        index: boolean;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    workspace_ids: {
        type: any[];
        index: boolean;
        ref: string;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    meta: {
        type: ObjectConstructor;
    };
};
export declare const schemaWebhook: {
    updated_at: {
        type: DateConstructor;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    connection_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    hook_url: {
        type: StringConstructor;
    };
    object_type: {
        type: StringConstructor;
        enum: string[];
    };
    interval: {
        type: NumberConstructor;
    };
    checked_at: {
        type: DateConstructor;
    };
    integration_type: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    event: {
        type: StringConstructor;
        enum: string[];
    };
    runs: {
        type: StringConstructor[];
    };
    fields: {
        type: StringConstructor;
    };
    webhook_type: {
        type: StringConstructor;
        enum: string[];
    };
    meta: {
        type: ObjectConstructor;
    };
    is_healthy: {
        type: BooleanConstructor;
    };
    page_max_limit: {
        type: NumberConstructor;
    };
    filters: {
        type: ObjectConstructor;
    };
};
export declare const schemaWebhookData: {
    data: {
        type: ObjectConstructor[];
    };
    webhook: {
        type: {
            updated_at: {
                type: DateConstructor;
            };
            workspace_id: {
                type: any;
                index: boolean;
                ref: string;
            };
            connection_id: {
                type: any;
                index: boolean;
                ref: string;
            };
            hook_url: {
                type: StringConstructor;
            };
            object_type: {
                type: StringConstructor;
                enum: string[];
            };
            interval: {
                type: NumberConstructor;
            };
            checked_at: {
                type: DateConstructor;
            };
            integration_type: {
                type: StringConstructor;
            };
            environment: {
                type: StringConstructor;
                default: string;
            };
            event: {
                type: StringConstructor;
                enum: string[];
            };
            runs: {
                type: StringConstructor[];
            };
            fields: {
                type: StringConstructor;
            };
            webhook_type: {
                type: StringConstructor;
                enum: string[];
            };
            meta: {
                type: ObjectConstructor;
            };
            is_healthy: {
                type: BooleanConstructor;
            };
            page_max_limit: {
                type: NumberConstructor;
            };
            filters: {
                type: ObjectConstructor;
            };
        };
    };
    nonce: {
        type: StringConstructor;
    };
    sig: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        enum: string[];
    };
};
export declare const schemaWorkspaceIntegration: {
    integration_type: {
        type: StringConstructor;
    };
    client_id: {
        type: StringConstructor;
    };
    client_secret: {
        type: StringConstructor;
    };
    consumer_key: {
        type: StringConstructor;
    };
    consumer_secret: {
        type: StringConstructor;
    };
    is_active: {
        type: BooleanConstructor;
    };
    api_url: {
        type: StringConstructor;
    };
    authorize_url: {
        type: StringConstructor;
    };
    token_url: {
        type: StringConstructor;
    };
    base_url: {
        type: StringConstructor;
    };
    pem: {
        type: StringConstructor;
    };
    key: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    categories: {
        type: StringConstructor[];
        enum: string[];
    };
    dev_api_key: {
        type: StringConstructor;
    };
};
export declare const schemaWorkspace: {
    name: {
        type: StringConstructor;
    };
    admin_ids: {
        type: any[];
        index: boolean;
        ref: string;
    };
    invited_emails: {
        type: StringConstructor[];
        index: boolean;
    };
    pay_user_id: {
        type: StringConstructor;
    };
    plan: {
        type: StringConstructor;
    };
    stripe_customer: {
        type: StringConstructor;
    };
    stripe_subscriptions: {
        type: StringConstructor[];
    };
    stripe_prices: {
        type: StringConstructor[];
    };
    secret: {
        type: StringConstructor;
    };
    integrations: {
        type: {
            integration_type: {
                type: StringConstructor;
            };
            client_id: {
                type: StringConstructor;
            };
            client_secret: {
                type: StringConstructor;
            };
            consumer_key: {
                type: StringConstructor;
            };
            consumer_secret: {
                type: StringConstructor;
            };
            is_active: {
                type: BooleanConstructor;
            };
            api_url: {
                type: StringConstructor;
            };
            authorize_url: {
                type: StringConstructor;
            };
            token_url: {
                type: StringConstructor;
            };
            base_url: {
                type: StringConstructor;
            };
            pem: {
                type: StringConstructor;
            };
            key: {
                type: StringConstructor;
            };
            environment: {
                type: StringConstructor;
                default: string;
            };
            categories: {
                type: StringConstructor[];
                enum: string[];
            };
            dev_api_key: {
                type: StringConstructor;
            };
        }[];
    };
    ip_addresses: {
        type: StringConstructor[];
    };
    aws_region: {
        type: StringConstructor;
    };
    aws_key: {
        type: StringConstructor;
    };
    aws_secret: {
        type: StringConstructor;
    };
    datadog_apikey: {
        type: StringConstructor;
    };
    datadog_site: {
        type: StringConstructor;
    };
    environments: {
        type: StringConstructor[];
    };
    add_ons: {
        type: StringConstructor[];
    };
    checklist: {
        type: ObjectConstructor;
    };
    plan_term: {
        type: StringConstructor;
        enum: string[];
        default: string;
    };
    stripe_canceling_at: {
        type: DateConstructor;
    };
    domain: {
        type: StringConstructor;
    };
    event_webhook_url: {
        type: StringConstructor;
    };
    event_webhook_events: {
        type: StringConstructor[];
        enum: string[];
    };
    custom_auth_domain: {
        type: StringConstructor;
    };
    custom_auth_domain_valid: {
        type: BooleanConstructor;
    };
    custom_api_domain: {
        type: StringConstructor;
    };
};
