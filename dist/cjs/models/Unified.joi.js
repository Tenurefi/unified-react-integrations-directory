"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiWorkspace = exports.joiWorkspaceIntegration = exports.joiWebhookData = exports.joiWebhook = exports.joiUser = exports.joiPlan = exports.joiPermission = exports.joiNotification = exports.joiIssue = exports.joiInvoice = exports.joiIntegration = exports.joiIntegrationSupport = exports.joiConnection = exports.joiConnectionAuth = exports.joiApiCall = exports.joimap_WebhookEvent_IntegrationSupportWebhookType = exports.joiWorkspaceEventType = exports.joiWebhookEvent = exports.joiWebhookDataType = exports.joiSupportOutboundType = exports.joiSupportInboundType = exports.joiPlanTerm = exports.joiObjectType = exports.joiIssueStatus = exports.joiIntegrationSupportWebhookType = exports.joiIntegrationPermission = exports.joiIntegrationCategory = exports.joiIntegrationAuthType = exports.joiApiCallType = void 0;
/*
Unified
==============
*/
const Joi = __importStar(require("joi"));
exports.joiApiCallType = Joi.string().valid('login', 'webhook', 'inbound');
exports.joiIntegrationAuthType = Joi.string().valid('oauth1', 'oauth2', 'other', 'token');
exports.joiIntegrationCategory = Joi.string().valid('passthrough', 'hris', 'ats', 'auth', 'crm', 'enrich', 'martech', 'ticketing', 'uc', 'accounting', 'storage', 'commerce', 'payment', 'genai', 'messaging', 'kms', 'task', 'scim');
exports.joiIntegrationPermission = Joi.string().valid('auth_login', 'accounting_account_read', 'accounting_account_write', 'accounting_transaction_read', 'accounting_transaction_write', 'accounting_journal_read', 'accounting_journal_write', 'accounting_invoice_read', 'accounting_invoice_write', 'accounting_contact_read', 'accounting_contact_write', 'accounting_taxrate_read', 'accounting_taxrate_write', 'accounting_organization_read', 'accounting_order_read', 'accounting_order_write', 'payment_payment_read', 'payment_payment_write', 'payment_payout_read', 'payment_refund_read', 'payment_link_read', 'payment_link_write', 'commerce_item_read', 'commerce_item_write', 'commerce_collection_read', 'commerce_collection_write', 'commerce_inventory_read', 'commerce_inventory_write', 'commerce_location_read', 'commerce_location_write', 'ats_activity_read', 'ats_activity_write', 'ats_application_read', 'ats_application_write', 'ats_applicationstatus_read', 'ats_candidate_read', 'ats_candidate_write', 'ats_interview_read', 'ats_interview_write', 'ats_job_read', 'ats_job_write', 'ats_company_read', 'ats_document_read', 'ats_document_write', 'ats_scorecard_read', 'ats_scorecard_write', 'crm_company_read', 'crm_company_write', 'crm_contact_read', 'crm_contact_write', 'crm_deal_read', 'crm_deal_write', 'crm_event_read', 'crm_event_write', 'crm_lead_read', 'crm_lead_write', 'crm_pipeline_read', 'crm_pipeline_write', 'martech_list_read', 'martech_list_write', 'martech_member_read', 'martech_member_write', 'ticketing_customer_read', 'ticketing_customer_write', 'ticketing_ticket_read', 'ticketing_ticket_write', 'ticketing_note_read', 'ticketing_note_write', 'hris_employee_read', 'hris_employee_write', 'hris_group_read', 'hris_group_write', 'hris_payslip_read', 'hris_payslip_write', 'hris_timeoff_read', 'hris_timeoff_write', 'hris_company_read', 'hris_company_write', 'hris_location_read', 'hris_location_write', 'uc_call_read', 'storage_file_read', 'storage_file_write', 'webhook', 'genai_model_read', 'genai_prompt_read', 'genai_prompt_write', 'messaging_message_read', 'messaging_message_write', 'messaging_channel_read', 'kms_space_read', 'kms_space_write', 'kms_page_read', 'kms_page_write', 'kms_comment_read', 'kms_comment_write', 'task_project_read', 'task_project_write', 'task_task_read', 'task_task_write', 'scim_users_read', 'scim_users_write', 'scim_groups_read', 'scim_groups_write');
exports.joiIntegrationSupportWebhookType = Joi.string().valid('virtual', 'native');
exports.joiIssueStatus = Joi.string().valid('COMPLETED', 'NEW', 'ROADMAP', 'IN_PROGRESS', 'ON_HOLD', 'VALIDATING', 'REJECTED', 'UP_NEXT');
exports.joiObjectType = Joi.string().valid('accounting_account', 'accounting_transaction', 'accounting_journal', 'accounting_contact', 'accounting_invoice', 'accounting_taxrate', 'accounting_organization', 'accounting_order', 'payment_payment', 'payment_link', 'payment_payout', 'payment_refund', 'commerce_item', 'commerce_collection', 'commerce_inventory', 'commerce_location', 'ats_activity', 'ats_application', 'ats_applicationstatus', 'ats_candidate', 'ats_document', 'ats_interview', 'ats_job', 'ats_scorecard', 'ats_company', 'crm_company', 'crm_contact', 'crm_deal', 'crm_event', 'crm_lead', 'crm_pipeline', 'hris_employee', 'hris_group', 'hris_payslip', 'hris_timeoff', 'hris_company', 'hris_location', 'martech_list', 'martech_member', 'passthrough', 'ticketing_note', 'ticketing_ticket', 'ticketing_customer', 'uc_contact', 'uc_call', 'enrich_person', 'enrich_company', 'storage_file', 'genai_model', 'genai_prompt', 'messaging_message', 'messaging_channel', 'kms_space', 'kms_page', 'task_project', 'task_task', 'scim_users', 'scim_groups');
exports.joiPlanTerm = Joi.string().valid('monthly', 'yearly');
exports.joiSupportInboundType = Joi.string().valid('supported-required', 'supported', 'not-supported');
exports.joiSupportOutboundType = Joi.string().valid('supported', 'not-supported');
exports.joiWebhookDataType = Joi.string().valid('INITIAL-PARTIAL', 'INITIAL-COMPLETE', 'VIRTUAL', 'NATIVE');
exports.joiWebhookEvent = Joi.string().valid('updated', 'created', 'deleted');
exports.joiWorkspaceEventType = Joi.string().valid('USER_CREATED', 'USER_DELETED', 'CONNECTION_HEALTHY', 'CONNECTION_UNHEALTHY', 'CONNECTION_CREATED', 'CONNECTION_UPDATED', 'CONNECTION_DELETED', 'CONNECTION_PAUSED', 'CONNECTION_UNPAUSED', 'INTEGRATION_ACTIVATED', 'INTEGRATION_DEACTIVATED', 'INTEGRATION_UPDATED', 'WORKSPACE_UPDATED', 'WORKSPACE_OVER_LIMIT', 'WORKSPACE_80PERCENT_LIMIT', 'WEBHOOK_CREATED', 'WEBHOOK_DELETED', 'WEBHOOK_UNHEALTHY');
exports.joimap_WebhookEvent_IntegrationSupportWebhookType = Joi.object({
    updated: Joi.array().items(exports.joiIntegrationSupportWebhookType).optional(),
    created: Joi.array().items(exports.joiIntegrationSupportWebhookType).optional(),
    deleted: Joi.array().items(exports.joiIntegrationSupportWebhookType).optional(),
}).label('map_WebhookEvent_IntegrationSupportWebhookType');
exports.joiApiCall = Joi.object({
    id: Joi.string().meta({ readonly: true }).optional().description('Unique identifier for this API call'),
    created_at: Joi.date().meta({ readonly: true }).optional().description('The date that this object was created'),
    connection_id: Joi.string().optional(),
    workspace_id: Joi.string().meta({ readonly: true }).optional(),
    integration_type: Joi.string().required().allow('').description('The integration type'),
    external_xref: Joi.string().optional().allow(null, '').description('your customer\'s user ID'),
    name: Joi.string().required().allow('').description('The called name of the API method'),
    path: Joi.string().required().allow('').description('The called API method\'s HTTP verb and route path (PUT /crm/{integration}/deak/{id})'),
    size: Joi.number().optional().description('The size of the response'),
    status: Joi.string().required().allow('').description('The resulting HTTP status code (200)'),
    error: Joi.string().optional().allow(null, '').description('The error description (if status code is >= 400)'),
    ip_address: Joi.string().optional().allow(null, ''),
    type: exports.joiApiCallType.required().description('The type of API Call being logged'),
    method: Joi.string().required().allow(''),
    environment: Joi.string().optional().allow(null, '').default('Production'),
    webhook_id: Joi.string().optional(),
    is_billable: Joi.boolean().optional(),
}).label('ApiCall');
exports.joiConnectionAuth = Joi.object({
    token: Joi.string().optional().allow(null, ''),
    access_token: Joi.string().optional().allow(null, ''),
    refresh_token: Joi.string().optional().allow(null, ''),
    expiry_date: Joi.date().optional(),
    expires_in: Joi.number().optional(),
    emails: Joi.array().items(Joi.string().email()).optional().allow(null, ''),
    name: Joi.string().optional().allow(null, ''),
    app_id: Joi.string().optional().allow(null, ''),
    client_id: Joi.string().optional().allow(null, ''),
    client_secret: Joi.string().optional().allow(null, ''),
    consumer_key: Joi.string().optional().allow(null, ''),
    consumer_secret: Joi.string().optional().allow(null, ''),
    meta: Joi.object().meta({ readonly: true }).optional(),
    state: Joi.string().optional().allow(null, ''),
    other_auth_info: Joi.array().items(Joi.string()).optional().allow(null, '').description('When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names'),
    api_url: Joi.string().uri().optional().allow(null, ''),
    authorize_url: Joi.string().uri().optional().allow(null, ''),
    token_url: Joi.string().uri().optional().allow(null, ''),
    pem: Joi.string().optional().allow(null, '').description('the PEM X.509 certificate in Base64 ASCII format'),
    key: Joi.string().optional().allow(null, '').description('the private KEY X.509 certificate in Base64 ASCII format'),
    refresh_token_expires_in: Joi.number().optional(),
    refresh_token_expires_date: Joi.date().optional(),
    dev_api_key: Joi.string().optional().allow(null, ''),
}).label('ConnectionAuth').description('An authentication object that represents a specific authorized user\'s connection to an integration.');
exports.joiConnection = Joi.object({
    id: Joi.string().meta({ readonly: true }).optional().description('Unique identifier for this integration object'),
    created_at: Joi.date().meta({ readonly: true }).optional().description('The date that this integration object was created'),
    updated_at: Joi.date().meta({ readonly: true }).optional().description('The last date that this integration object was updated'),
    workspace_id: Joi.string().meta({ readonly: true }).optional(),
    integration_type: Joi.string().required().allow('').description('The integration type'),
    external_xref: Joi.string().optional().allow(null, '').description('customer\'s user ID'),
    permissions: Joi.array().items(exports.joiIntegrationPermission).required(),
    categories: Joi.array().items(exports.joiIntegrationCategory).required().description('The Integration categories that this connection supports'),
    auth: exports.joiConnectionAuth.optional(),
    is_paused: Joi.boolean().meta({ readonly: true }).optional().description('Whether this integration has exceed the monthly limit of the plan'),
    auth_aws_arn: Joi.string().optional().allow(null, '').description('the AWS ARN / secretID for the stored auth field'),
    environment: Joi.string().optional().allow(null, '').default('Production'),
    last_healthy_at: Joi.date().meta({ readonly: true }).optional(),
    last_unhealthy_at: Joi.date().meta({ readonly: true }).optional(),
    cursors_cache: Joi.array().items(Joi.object()).meta({ readonly: true }).optional(),
}).label('Connection').description('A connection represents a specific authentication of an integration.');
exports.joiIntegrationSupport = Joi.object({
    methods: Joi.object().pattern(/^/, Joi.boolean().optional()).optional(),
    inbound_fields: Joi.object().label('SupportInboundType').optional(),
    outbound_fields: Joi.object().label('SupportOutboundType').optional(),
    webhook_events: exports.joimap_WebhookEvent_IntegrationSupportWebhookType.optional(),
    raw_objects: Joi.array().items(Joi.string()).optional().allow(null, '').description('objects that we map from in the integration'),
    from_webhook: exports.joiSupportInboundType.optional(),
    list_sort_by_name: exports.joiSupportInboundType.optional(),
    list_sort_by_created_at: exports.joiSupportInboundType.optional(),
    list_sort_by_updated_at: exports.joiSupportInboundType.optional(),
    list_updated_gte: exports.joiSupportInboundType.optional(),
    list_user_id: exports.joiSupportInboundType.optional(),
    list_customer_id: exports.joiSupportInboundType.optional(),
    list_company_id: exports.joiSupportInboundType.optional(),
    list_contact_id: exports.joiSupportInboundType.optional(),
    list_application_id: exports.joiSupportInboundType.optional(),
    list_candidate_id: exports.joiSupportInboundType.optional(),
    list_deal_id: exports.joiSupportInboundType.optional(),
    list_job_id: exports.joiSupportInboundType.optional(),
    list_invoice_id: exports.joiSupportInboundType.optional(),
    list_order: exports.joiSupportInboundType.optional(),
    list_query: exports.joiSupportInboundType.optional(),
    list_limit: exports.joiSupportInboundType.optional(),
    list_offset: exports.joiSupportInboundType.optional(),
    search_twitter: exports.joiSupportInboundType.optional(),
    search_name: exports.joiSupportInboundType.optional(),
    search_linkedinurl: exports.joiSupportInboundType.optional(),
    search_email: exports.joiSupportInboundType.optional(),
    search_domain: exports.joiSupportInboundType.optional(),
    list_parent_id: exports.joiSupportInboundType.optional(),
    list_account_id: exports.joiSupportInboundType.optional(),
    list_interview_id: exports.joiSupportInboundType.optional(),
    list_list_id: exports.joiSupportInboundType.optional(),
    list_ticket_id: exports.joiSupportInboundType.optional(),
    list_collection_id: exports.joiSupportInboundType.optional(),
    list_location_id: exports.joiSupportInboundType.optional(),
    list_item_id: exports.joiSupportInboundType.optional(),
    list_type: exports.joiSupportInboundType.optional(),
    list_space_id: exports.joiSupportInboundType.optional(),
    list_channel_id: exports.joiSupportInboundType.optional(),
    list_link_id: exports.joiSupportInboundType.optional(),
    list_project_id: exports.joiSupportInboundType.optional(),
    list_item_variant_id: exports.joiSupportInboundType.optional(),
    list_raw_fields: exports.joiSupportInboundType.optional(),
}).label('IntegrationSupport');
exports.joiIntegration = Joi.object({
    type: Joi.string().required().allow('').description('Identifier for this integration'),
    created_at: Joi.string().optional().allow(null, '').description('Date that this integration was supported (YYYY-MM-DD)'),
    updated_at: Joi.string().optional().allow(null, '').description('YYYY-MM-DD'),
    name: Joi.string().required().allow('').description('The integration\'s name'),
    is_active: Joi.boolean().optional().description('Is this integration active in this workspace'),
    categories: Joi.array().items(exports.joiIntegrationCategory).required().description('The categories of support solutions that this integration has'),
    api_docs_url: Joi.string().uri().optional().allow(null, '').description('The URL of the integration\'s API documentation'),
    logo_url: Joi.string().uri().optional().allow(null, '').description('The URL of the integration\'s logo'),
    in_progress: Joi.boolean().optional().description('If this integration is not yet available as it is currently being built by unified.to'),
    color: Joi.string().optional().allow(null, '').description('button background color for AUTH'),
    text_color: Joi.string().optional().allow(null, '').description('text color for AUTH'),
    fa_icon: Joi.string().optional().allow(null, '').description('font-awesome icon'),
    token_names: Joi.array().items(Joi.string()).optional().allow(null, '').description('if auth_types = \'token\''),
    token_instructions: Joi.array().items(Joi.string()).optional().allow(null, '').description('instructions for the user on how to find the token/key'),
    web_url: Joi.string().uri().optional().allow(null, '').description('URL for the software vendor'),
    rate_limit_description: Joi.string().optional().allow(null, ''),
    beta: Joi.boolean().optional().description('This integration is new and is still considered "beta"'),
    support: Joi.object().pattern(/^/, exports.joiIntegrationSupport.optional()).required(),
    tested_at: Joi.date().optional(),
}).label('Integration').description('Informational object for supported integrations.');
exports.joiInvoice = Joi.object({
    stripe_id: Joi.string().required().allow(''),
    created_at: Joi.date().required(),
    amount: Joi.number().required(),
    connections: Joi.number().required(),
    plan: Joi.string().required().allow(''),
}).label('Invoice');
exports.joiIssue = Joi.object({
    id: Joi.string().optional(),
    created_at: Joi.string().optional().allow(null, ''),
    updated_at: Joi.string().optional().allow(null, ''),
    title: Joi.string().required().allow(''),
    status: exports.joiIssueStatus.required(),
    url: Joi.string().uri().optional().allow(null, ''),
    workspace_id: Joi.string().required(),
    type: Joi.array().items(Joi.string()).optional().allow(null, ''),
    resolution_time: Joi.number().optional(),
    ticket_ref: Joi.string().required().allow(''),
    size: Joi.number().optional().description('1-5, 1 is lowest'),
    importance: Joi.number().optional().description('1-5, 1 is lowest'),
}).label('Issue');
exports.joiNotification = Joi.object({
    id: Joi.string().meta({ readonly: true }).optional().description('Unique identifier for this notification object'),
    created_at: Joi.date().meta({ readonly: true }).optional().description('The date that this integration object was created'),
    workspace_id: Joi.string().meta({ readonly: true }).optional(),
    description: Joi.string().optional().allow(null, '').description('Longer description of this notification'),
    user_id: Joi.string().optional(),
    user_name: Joi.string().optional().allow(null, ''),
    workspace_name: Joi.string().optional().allow(null, ''),
    webhook_id: Joi.string().optional(),
    connection_id: Joi.string().optional(),
    integration_type: Joi.string().optional().allow(null, ''),
    integration_name: Joi.string().optional().allow(null, ''),
    sent_at: Joi.date().optional(),
    event: exports.joiWorkspaceEventType.optional(),
}).label('Notification').description('A notification of an event that occurred in you account.');
exports.joiPermission = Joi.object({
    can_create_org: Joi.boolean().meta({ readonly: true }).optional(),
    can_leave_org: Joi.boolean().meta({ readonly: true }).optional(),
    can_downgrade: Joi.boolean().meta({ readonly: true }).optional(),
    can_invite: Joi.boolean().meta({ readonly: true }).optional(),
    can_update_org: Joi.boolean().meta({ readonly: true }).optional(),
    can_add_and_remove_admin: Joi.boolean().meta({ readonly: true }).optional(),
    can_accept_invite: Joi.boolean().meta({ readonly: true }).optional(),
    can_reject_invite: Joi.boolean().meta({ readonly: true }).optional(),
    can_pay: Joi.boolean().meta({ readonly: true }).optional(),
    can_get_invoices: Joi.boolean().meta({ readonly: true }).optional(),
    is_admin: Joi.boolean().meta({ readonly: true }).optional(),
}).label('Permission');
exports.joiPlan = Joi.object({
    test_stripe_product_id: Joi.string().optional().allow(null, ''),
    test_stripe_price_id: Joi.string().optional().allow(null, ''),
    min_annual_price: Joi.number().optional(),
    stripe_annual_price_id: Joi.string().optional().allow(null, ''),
    test_stripe_annual_price_id: Joi.string().optional().allow(null, ''),
    stripe_overage_price_id: Joi.string().optional().allow(null, ''),
    test_stripe_overage_price_id: Joi.string().optional().allow(null, ''),
    dedicated_channel: Joi.boolean().optional().description('Dedicated Slack/Discord channel'),
}).label('Plan');
exports.joiUser = Joi.object({
    id: Joi.string().meta({ readonly: true }).optional(),
    created_at: Joi.date().meta({ readonly: true }).optional(),
    updated_at: Joi.date().meta({ readonly: true }).optional(),
    name: Joi.string().required().allow(''),
    email: Joi.string().email().meta({ readonly: true }).optional().allow(''),
    workspace_id: Joi.string().required().description('The current workspace'),
    workspace_ids: Joi.array().items(Joi.string()).required().description('A list of all of the user\'s workspaces'),
    environment: Joi.string().optional().allow(null, '').default('Production'),
    meta: Joi.object().optional(),
}).label('User').description('The User object represents you on the system. A user can belong to multiple workspaces (ie. organizations).');
exports.joiWebhook = Joi.object({
    id: Joi.string().meta({ readonly: true }).optional(),
    created_at: Joi.date().meta({ readonly: true }).optional(),
    updated_at: Joi.date().meta({ readonly: true }).optional(),
    workspace_id: Joi.string().meta({ readonly: true }).optional(),
    connection_id: Joi.string().required(),
    hook_url: Joi.string().uri().required().allow('').description('The URL of the webhook'),
    object_type: exports.joiObjectType.required().description('The object to return (eg. CRM "contact")'),
    interval: Joi.number().optional().description('The interval (in minutes) to check for updated/new objets.  Minimum is 5 minutes.  Interval is based off of 5-minute increments.'),
    checked_at: Joi.date().meta({ readonly: true }).optional().description('The last date/time that a check was done on this object'),
    integration_type: Joi.string().meta({ readonly: true }).optional().allow(''),
    environment: Joi.string().meta({ readonly: true }).optional().allow(null, '').default('Production'),
    event: exports.joiWebhookEvent.required(),
    runs: Joi.array().items(Joi.string()).meta({ readonly: true }).optional().allow(null, '').description('An array of the most revent virtual webhook runs'),
    fields: Joi.string().optional().allow(null, ''),
    webhook_type: exports.joiIntegrationSupportWebhookType.optional(),
    meta: Joi.object().meta({ readonly: true }).optional(),
    is_healthy: Joi.boolean().meta({ readonly: true }).optional(),
    page_max_limit: Joi.number().optional(),
    filters: Joi.object().pattern(/^/, Joi.string().optional()).optional().allow(null, ''),
}).label('Webhook').description('A webhook is used to POST new/updated information to your server.');
exports.joiWebhookData = Joi.object({
    data: Joi.array().items(Joi.object()).required().description('The data array will contact an array of specific objects according to the webhook\'s connection. (eg. CRM Contacts)'),
    webhook: exports.joiWebhook.required().description('The webhook object'),
    nonce: Joi.string().required().allow('').description('random string'),
    sig: Joi.string().required().allow('').description('HMAC-SHA1(workspace.secret, data + nonce)'),
    type: exports.joiWebhookDataType.required(),
}).label('WebhookData');
exports.joiWorkspaceIntegration = Joi.object({
    integration_type: Joi.string().required().allow(''),
    client_id: Joi.string().optional().allow(null, ''),
    client_secret: Joi.string().optional().allow(null, ''),
    consumer_key: Joi.string().optional().allow(null, ''),
    consumer_secret: Joi.string().optional().allow(null, ''),
    is_active: Joi.boolean().required(),
    api_url: Joi.string().optional().allow(null, ''),
    authorize_url: Joi.string().optional().allow(null, ''),
    token_url: Joi.string().optional().allow(null, ''),
    base_url: Joi.string().optional().allow(null, ''),
    pem: Joi.string().optional().allow(null, '').description('the PEM X.509 certificate in Base64 ASCII format'),
    key: Joi.string().optional().allow(null, '').description('the private KEY X.509 certificate in Base64 ASCII format'),
    environment: Joi.string().optional().allow(null, '').description('authentication environment').default('Production'),
    categories: Joi.array().items(exports.joiIntegrationCategory).optional(),
    dev_api_key: Joi.string().optional().allow(null, ''),
}).label('WorkspaceIntegration');
exports.joiWorkspace = Joi.object({
    id: Joi.string().meta({ readonly: true }).optional(),
    created_at: Joi.date().meta({ readonly: true }).optional(),
    updated_at: Joi.date().meta({ readonly: true }).optional(),
    name: Joi.string().required().allow(''),
    admin_ids: Joi.array().items(Joi.string()).meta({ readonly: true }).optional().description('Only these users can add additional admins and invite other users'),
    invited_emails: Joi.array().items(Joi.string()).meta({ readonly: true }).optional().allow(null, ''),
    pay_user_id: Joi.string().meta({ readonly: true }).optional().allow(null, ''),
    plan: Joi.string().meta({ readonly: true }).optional().allow(null, ''),
    stripe_customer: Joi.string().meta({ readonly: true }).optional().allow(null, ''),
    stripe_subscriptions: Joi.array().items(Joi.string()).meta({ readonly: true }).optional().allow(null, ''),
    stripe_prices: Joi.array().items(Joi.string()).meta({ readonly: true }).optional().allow(null, ''),
    secret: Joi.string().meta({ readonly: true }).optional().allow(null, '').description('Workspace API secret'),
    integrations: Joi.array().items(exports.joiWorkspaceIntegration).meta({ readonly: true }).optional().description('Workspace active integrations'),
    ip_addresses: Joi.array().items(Joi.string()).optional().allow(null, '').description('a list of IP addresses that are allowed to access this workspace'),
    aws_region: Joi.string().optional().allow(null, ''),
    aws_key: Joi.string().optional().allow(null, ''),
    aws_secret: Joi.string().optional().allow(null, ''),
    datadog_apikey: Joi.string().optional().allow(null, ''),
    datadog_site: Joi.string().optional().allow(null, ''),
    environments: Joi.array().items(Joi.string()).optional().allow(null, '').description('a list of authentication environments for the workspace integrations'),
    add_ons: Joi.array().items(Joi.string()).optional().allow(null, ''),
    checklist: Joi.object().optional(),
    plan_term: exports.joiPlanTerm.optional().description('monthly or yearly').default('monthly'),
    stripe_canceling_at: Joi.date().optional(),
    domain: Joi.string().optional().allow(null, '').description('when set, users of the same domain will auto-join this workspace.  must not be gmail.com or other public domains'),
    event_webhook_url: Joi.string().uri().optional().allow(null, ''),
    event_webhook_events: Joi.array().items(exports.joiWorkspaceEventType).optional(),
    custom_auth_domain: Joi.string().optional().allow(null, ''),
    custom_auth_domain_valid: Joi.boolean().optional(),
    custom_api_domain: Joi.string().optional().allow(null, ''),
}).label('Workspace').description('The User\'s workspace object. A workspace is like an organization that one or more users belong to.');
//# sourceMappingURL=Unified.joi.js.map