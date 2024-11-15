export declare const ApiCallType: readonly ["login", "webhook", "inbound"];
export type TApiCallType = typeof ApiCallType[number];
export declare const IntegrationAuthType: readonly ["oauth1", "oauth2", "other", "token"];
export type TIntegrationAuthType = typeof IntegrationAuthType[number];
export declare const IntegrationCategory: readonly ["passthrough", "hris", "ats", "auth", "crm", "enrich", "martech", "ticketing", "uc", "accounting", "storage", "commerce", "payment", "genai", "messaging", "kms", "task", "scim", "lms", "repo"];
export type TIntegrationCategory = typeof IntegrationCategory[number];
export declare const IntegrationPermission: readonly ["auth_login", "accounting_account_read", "accounting_account_write", "accounting_transaction_read", "accounting_transaction_write", "accounting_journal_read", "accounting_journal_write", "accounting_invoice_read", "accounting_invoice_write", "accounting_contact_read", "accounting_contact_write", "accounting_taxrate_read", "accounting_taxrate_write", "accounting_organization_read", "accounting_order_read", "accounting_order_write", "payment_payment_read", "payment_payment_write", "payment_payout_read", "payment_refund_read", "payment_link_read", "payment_link_write", "commerce_item_read", "commerce_item_write", "commerce_collection_read", "commerce_collection_write", "commerce_inventory_read", "commerce_inventory_write", "commerce_location_read", "commerce_location_write", "ats_activity_read", "ats_activity_write", "ats_application_read", "ats_application_write", "ats_applicationstatus_read", "ats_candidate_read", "ats_candidate_write", "ats_interview_read", "ats_interview_write", "ats_job_read", "ats_job_write", "ats_company_read", "ats_document_read", "ats_document_write", "ats_scorecard_read", "ats_scorecard_write", "crm_company_read", "crm_company_write", "crm_contact_read", "crm_contact_write", "crm_deal_read", "crm_deal_write", "crm_event_read", "crm_event_write", "crm_lead_read", "crm_lead_write", "crm_pipeline_read", "crm_pipeline_write", "martech_list_read", "martech_list_write", "martech_member_read", "martech_member_write", "ticketing_customer_read", "ticketing_customer_write", "ticketing_ticket_read", "ticketing_ticket_write", "ticketing_note_read", "ticketing_note_write", "hris_employee_read", "hris_employee_write", "hris_group_read", "hris_group_write", "hris_payslip_read", "hris_payslip_write", "hris_timeoff_read", "hris_timeoff_write", "hris_company_read", "hris_company_write", "hris_location_read", "hris_location_write", "uc_call_read", "storage_file_read", "storage_file_write", "webhook", "genai_model_read", "genai_prompt_read", "genai_prompt_write", "messaging_message_read", "messaging_message_write", "messaging_channel_read", "kms_space_read", "kms_space_write", "kms_page_read", "kms_page_write", "kms_comment_read", "kms_comment_write", "task_project_read", "task_project_write", "task_task_read", "task_task_write", "scim_users_read", "scim_users_write", "scim_groups_read", "scim_groups_write", "lms_course_read", "lms_course_write", "lms_class_read", "lms_class_write", "lms_student_read", "lms_student_write", "lms_instructor_read", "lms_instructor_write", "repo_organization_read", "repo_organization_write", "repo_repository_read", "repo_repository_write", "repo_branch_read", "repo_branch_write", "repo_commit_read", "repo_commit_write", "repo_pullrequest_read", "repo_pullrequest_write"];
export type TIntegrationPermission = typeof IntegrationPermission[number];
export declare const IntegrationSupportWebhookType: readonly ["virtual", "native"];
export type TIntegrationSupportWebhookType = typeof IntegrationSupportWebhookType[number];
export declare const IssueStatus: readonly ["COMPLETED", "NEW", "ROADMAP", "IN_PROGRESS", "ON_HOLD", "VALIDATING", "REJECTED", "UP_NEXT"];
export type TIssueStatus = typeof IssueStatus[number];
export declare const ObjectType: readonly ["accounting_account", "accounting_transaction", "accounting_journal", "accounting_contact", "accounting_invoice", "accounting_taxrate", "accounting_organization", "accounting_order", "payment_payment", "payment_link", "payment_payout", "payment_refund", "commerce_item", "commerce_collection", "commerce_inventory", "commerce_location", "ats_activity", "ats_application", "ats_applicationstatus", "ats_candidate", "ats_document", "ats_interview", "ats_job", "ats_scorecard", "ats_company", "crm_company", "crm_contact", "crm_deal", "crm_event", "crm_lead", "crm_pipeline", "hris_employee", "hris_group", "hris_payslip", "hris_timeoff", "hris_company", "hris_location", "martech_list", "martech_member", "passthrough", "ticketing_note", "ticketing_ticket", "ticketing_customer", "uc_contact", "uc_call", "enrich_person", "enrich_company", "storage_file", "genai_model", "genai_prompt", "messaging_message", "messaging_channel", "kms_space", "kms_page", "task_project", "task_task", "scim_users", "scim_groups", "lms_course", "lms_class", "lms_student", "lms_instructor", "scim_groups", "repo_organization", "repo_repository", "repo_branch", "repo_commit", "repo_pullrequest"];
export type TObjectType = typeof ObjectType[number];
export declare const PlanTerm: readonly ["monthly", "yearly"];
export type TPlanTerm = typeof PlanTerm[number];
export declare const SupportInboundType: readonly ["supported-required", "supported", "not-supported"];
export type TSupportInboundType = typeof SupportInboundType[number];
export declare const SupportOutboundType: readonly ["supported", "not-supported"];
export type TSupportOutboundType = typeof SupportOutboundType[number];
export declare const WebhookDataType: readonly ["INITIAL-PARTIAL", "INITIAL-COMPLETE", "VIRTUAL", "NATIVE"];
export type TWebhookDataType = typeof WebhookDataType[number];
export declare const WebhookEvent: readonly ["updated", "created", "deleted"];
export type TWebhookEvent = typeof WebhookEvent[number];
export declare const WorkspaceEventType: readonly ["USER_CREATED", "USER_DELETED", "CONNECTION_HEALTHY", "CONNECTION_UNHEALTHY", "CONNECTION_CREATED", "CONNECTION_UPDATED", "CONNECTION_DELETED", "CONNECTION_PAUSED", "CONNECTION_UNPAUSED", "INTEGRATION_ACTIVATED", "INTEGRATION_DEACTIVATED", "INTEGRATION_UPDATED", "WORKSPACE_UPDATED", "WORKSPACE_OVER_LIMIT", "WORKSPACE_80PERCENT_LIMIT", "WEBHOOK_CREATED", "WEBHOOK_DELETED", "WEBHOOK_UNHEALTHY"];
export type TWorkspaceEventType = typeof WorkspaceEventType[number];
export interface IApiCall {
    id?: string;
    created_at?: string | Date;
    connection_id?: string;
    workspace_id: string;
    integration_type: string;
    external_xref?: string;
    name: string;
    path: string;
    size?: number;
    status: string;
    error?: string;
    ip_address?: string;
    type: TApiCallType;
    method: string;
    environment?: string;
    webhook_id?: string;
    is_billable?: boolean;
}
export interface IConnection {
    id?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    workspace_id: string;
    integration_type: string;
    external_xref?: string;
    permissions: (TIntegrationPermission)[];
    categories: (TIntegrationCategory)[];
    auth?: IConnectionAuth;
    is_paused?: boolean;
    auth_aws_arn?: string;
    environment?: string;
    last_healthy_at?: string | Date;
    last_unhealthy_at?: string | Date;
}
export interface IConnectionAuth {
    token?: string;
    access_token?: string;
    refresh_token?: string;
    expiry_date?: string | Date;
    expires_in?: number;
    emails?: string[];
    name?: string;
    app_id?: string;
    client_id?: string;
    client_secret?: string;
    consumer_key?: string;
    consumer_secret?: string;
    meta?: unknown;
    state?: string;
    other_auth_info?: string[];
    api_url?: string;
    authorize_url?: string;
    token_url?: string;
    pem?: string;
    key?: string;
    refresh_token_expires_in?: number;
    refresh_token_expires_date?: string | Date;
    dev_api_key?: string;
}
export interface IIntegration {
    type: string;
    created_at?: string;
    updated_at?: string;
    name: string;
    is_active?: boolean;
    categories: (TIntegrationCategory)[];
    api_docs_url?: string;
    logo_url?: string;
    in_progress?: boolean;
    color?: string;
    text_color?: string;
    fa_icon?: string;
    token_names?: string[];
    token_instructions?: string[];
    web_url?: string;
    rate_limit_description?: string;
    beta?: boolean;
    support: {
        [path in string]?: IIntegrationSupport;
    };
    tested_at?: string | Date;
}
export interface IIntegrationSupport {
    methods?: {
        [path in string]?: boolean;
    };
    inbound_fields?: {
        [path in string]?: TSupportInboundType;
    };
    outbound_fields?: {
        [path in string]?: TSupportOutboundType;
    };
    webhook_events?: {
        [path in TWebhookEvent]?: (TIntegrationSupportWebhookType)[];
    };
    raw_objects?: string[];
    from_webhook?: TSupportInboundType;
    list_sort_by_name?: TSupportInboundType;
    list_sort_by_created_at?: TSupportInboundType;
    list_sort_by_updated_at?: TSupportInboundType;
    list_updated_gte?: TSupportInboundType;
    list_user_id?: TSupportInboundType;
    list_customer_id?: TSupportInboundType;
    list_company_id?: TSupportInboundType;
    list_contact_id?: TSupportInboundType;
    list_application_id?: TSupportInboundType;
    list_candidate_id?: TSupportInboundType;
    list_deal_id?: TSupportInboundType;
    list_job_id?: TSupportInboundType;
    list_invoice_id?: TSupportInboundType;
    list_order?: TSupportInboundType;
    list_query?: TSupportInboundType;
    list_limit?: TSupportInboundType;
    list_offset?: TSupportInboundType;
    search_twitter?: TSupportInboundType;
    search_name?: TSupportInboundType;
    search_linkedinurl?: TSupportInboundType;
    search_email?: TSupportInboundType;
    search_domain?: TSupportInboundType;
    list_parent_id?: TSupportInboundType;
    list_account_id?: TSupportInboundType;
    list_interview_id?: TSupportInboundType;
    list_list_id?: TSupportInboundType;
    list_ticket_id?: TSupportInboundType;
    list_collection_id?: TSupportInboundType;
    list_location_id?: TSupportInboundType;
    list_item_id?: TSupportInboundType;
    list_type?: TSupportInboundType;
    list_space_id?: TSupportInboundType;
    list_channel_id?: TSupportInboundType;
    list_link_id?: TSupportInboundType;
    list_project_id?: TSupportInboundType;
    list_item_variant_id?: TSupportInboundType;
    list_raw_fields?: TSupportInboundType;
    list_course_id?: TSupportInboundType;
    list_student_id?: TSupportInboundType;
    list_instructor_id?: TSupportInboundType;
    list_class_id?: TSupportInboundType;
}
export interface IInvoice {
    stripe_id: string;
    created_at: string | Date;
    amount: number;
    connections: number;
    plan: string;
}
export interface IIssue {
    id?: string;
    created_at?: string;
    updated_at?: string;
    title: string;
    status: TIssueStatus;
    url?: string;
    workspace_id: string;
    type?: string[];
    resolution_time?: number;
    ticket_ref: string;
    size?: number;
    importance?: number;
}
export interface INotification {
    id?: string;
    created_at?: string | Date;
    workspace_id?: string;
    description?: string;
    user_id?: string;
    user_name?: string;
    workspace_name?: string;
    webhook_id?: string;
    connection_id?: string;
    integration_type?: string;
    integration_name?: string;
    sent_at?: string | Date;
    event?: TWorkspaceEventType;
}
export interface IPermission {
    can_create_org: boolean;
    can_leave_org: boolean;
    can_downgrade: boolean;
    can_invite: boolean;
    can_update_org: boolean;
    can_add_and_remove_admin: boolean;
    can_accept_invite: boolean;
    can_reject_invite: boolean;
    can_pay: boolean;
    can_get_invoices: boolean;
    is_admin: boolean;
}
export interface IPlan {
    name: string;
    description?: string;
    max_connections?: number;
    stripe_product_id?: string;
    stripe_price_id?: string;
    min_price?: number;
    price_per_mille_requests?: number;
    custom_oauth?: boolean;
    max_requests?: number;
    test_stripe_product_id?: string;
    test_stripe_price_id?: string;
    min_annual_price?: number;
    stripe_annual_price_id?: string;
    test_stripe_annual_price_id?: string;
    stripe_overage_price_id?: string;
    test_stripe_overage_price_id?: string;
    dedicated_channel?: boolean;
}
export interface IUser {
    id?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    name: string;
    email: string;
    workspace_id: string;
    workspace_ids: string[];
    environment?: string;
    meta?: unknown;
}
export interface IWebhook {
    id?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    workspace_id?: string;
    connection_id: string;
    hook_url: string;
    object_type: TObjectType;
    interval?: number;
    checked_at: string | Date;
    integration_type: string;
    environment?: string;
    event: TWebhookEvent;
    runs?: string[];
    fields?: string;
    webhook_type?: TIntegrationSupportWebhookType;
    meta?: unknown;
    is_healthy?: boolean;
    page_max_limit?: number;
    filters?: {
        [path in string]?: string;
    };
}
export interface IWebhookData {
    data: unknown[];
    webhook: IWebhook;
    nonce: string;
    sig: string;
    type: TWebhookDataType;
}
export interface IWorkspace {
    id?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    name: string;
    admin_ids?: string[];
    invited_emails?: string[];
    pay_user_id?: string;
    plan?: string;
    stripe_customer?: string;
    stripe_subscriptions?: string[];
    stripe_prices?: string[];
    secret?: string;
    integrations?: IWorkspaceIntegration[];
    ip_addresses?: string[];
    aws_region?: string;
    aws_key?: string;
    aws_secret?: string;
    datadog_apikey?: string;
    datadog_site?: string;
    environments?: string[];
    add_ons?: string[];
    checklist?: unknown;
    plan_term?: TPlanTerm;
    stripe_canceling_at?: string | Date;
    domain?: string;
    event_webhook_url?: string;
    event_webhook_events?: (TWorkspaceEventType)[];
    custom_auth_domain?: string;
    custom_auth_domain_valid?: boolean;
    custom_api_domain?: string;
}
export interface IWorkspaceIntegration {
    integration_type: string;
    client_id?: string;
    client_secret?: string;
    consumer_key?: string;
    consumer_secret?: string;
    is_active: boolean;
    api_url?: string;
    authorize_url?: string;
    token_url?: string;
    base_url?: string;
    pem?: string;
    key?: string;
    environment?: string;
    categories?: (TIntegrationCategory)[];
    dev_api_key?: string;
}
