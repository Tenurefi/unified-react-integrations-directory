/*
Unified
==============
*/
import * as Joi from 'joi';

export const joiApiCallType = Joi.string().valid(
	'login',
	'webhook',
	'inbound');

export const joiIntegrationAuthType = Joi.string().valid(
	'oauth1',
	'oauth2',
	'other',
	'token');

export const joiIntegrationCategory = Joi.string().valid(
	'passthrough',
	'hris',
	'ats',
	'auth',
	'crm',
	'enrich',
	'martech',
	'ticketing',
	'uc',
	'accounting',
	'storage',
	'commerce');

export const joiIntegrationPermission = Joi.string().valid(
	'auth_login',
	'accounting_account_read',
	'accounting_account_write',
	'accounting_transaction_read',
	'accounting_transaction_write',
	'accounting_invoice_read',
	'accounting_invoice_write',
	'accounting_contact_read',
	'accounting_contact_write',
	'accounting_payment_read',
	'accounting_payment_write',
	'accounting_taxrate_read',
	'accounting_taxrate_write',
	'accounting_organization_read',
	'accounting_payout_read',
	'accounting_refund_read',
	'commerce_item_read',
	'commerce_item_write',
	'commerce_collection_read',
	'commerce_collection_write',
	'commerce_inventory_read',
	'commerce_inventory_write',
	'commerce_location_read',
	'commerce_location_write',
	'ats_scorecard_read',
	'ats_scorecard_write',
	'ats_application_read',
	'ats_application_write',
	'ats_applicationstatus_read',
	'ats_candidate_read',
	'ats_candidate_write',
	'ats_interview_read',
	'ats_interview_write',
	'ats_job_read',
	'ats_job_write',
	'ats_company_read',
	'ats_document_read',
	'ats_document_write',
	'crm_company_read',
	'crm_company_write',
	'crm_contact_read',
	'crm_contact_write',
	'crm_deal_read',
	'crm_deal_write',
	'crm_event_read',
	'crm_event_write',
	'crm_lead_read',
	'crm_lead_write',
	'crm_pipeline_read',
	'crm_pipeline_write',
	'martech_list_read',
	'martech_list_write',
	'martech_member_read',
	'martech_member_write',
	'ticketing_customer_read',
	'ticketing_customer_write',
	'ticketing_ticket_read',
	'ticketing_ticket_write',
	'ticketing_note_read',
	'ticketing_note_write',
	'hris_employee_read',
	'hris_employee_write',
	'hris_group_read',
	'hris_group_write',
	'uc_call_read',
	'storage_file_read',
	'storage_file_write',
	'webhook');

export const joiIntegrationSupportWebhookType = Joi.string().valid(
	'virtual',
	'none',
	'native');

export const joiIssueStatus = Joi.string().valid(
	'ON_HOLD',
	'NEW',
	'IN_PROGRESS',
	'VALIDATING',
	'COMPLETE',
	'REJECTED');

export const joiIssueType = Joi.string().valid(
	'BUG',
	'FEATURE_REQUEST',
	'INQUIRY');

export const joiObjectType = Joi.string().valid(
	'accounting_account',
	'accounting_transaction',
	'accounting_contact',
	'accounting_invoice',
	'accounting_payment',
	'accounting_taxrate',
	'accounting_organization',
	'accounting_payout',
	'accounting_refund',
	'commerce_item',
	'commerce_collection',
	'commerce_inventory',
	'commerce_location',
	'ats_application',
	'ats_applicationstatus',
	'ats_candidate',
	'ats_document',
	'ats_interview',
	'ats_job',
	'ats_scorecard',
	'ats_company',
	'crm_company',
	'crm_contact',
	'crm_deal',
	'crm_event',
	'crm_lead',
	'crm_pipeline',
	'hris_employee',
	'hris_group',
	'martech_list',
	'martech_member',
	'passthrough',
	'ticketing_note',
	'ticketing_ticket',
	'ticketing_customer',
	'uc_contact',
	'uc_call',
	'enrich_person',
	'enrich_company',
	'storage_file');

export const joiPlanTerm = Joi.string().valid(
	'monthly',
	'yearly');

export const joiSupportInboundType = Joi.string().valid(
	'supported-required',
	'supported',
	'not-supported');

export const joiSupportOutboundType = Joi.string().valid(
	'supported',
	'not-supported');

export const joiWebhookDataType = Joi.string().valid(
	'INITIAL-PARTIAL',
	'INITIAL-COMPLETE',
	'VIRTUAL',
	'NATIVE');

export const joiWebhookEvent = Joi.string().valid(
	'updated',
	'created');

export const joiApiCall = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional().description('Unique identifier for this API call'),
	created_at: Joi.date().meta( { readonly: true }).optional().description('The date that this object was created'),
	workspace_id: Joi.string().required(),
	integration_type: Joi.string().required().allow('').description('The integration type'),
	external_xref: Joi.string().optional().allow(null, '').description('your customer\'s user ID'),
	name: Joi.string().required().allow('').description('The called name of the API method'),
	path: Joi.string().required().allow('').description('The called API method\'s HTTP verb and route path (PUT /crm/{integration}/deak/{id})'),
	size: Joi.number().optional().description('The size of the response'),
	status: Joi.string().required().allow('').description('The resulting HTTP status code (200)'),
	error: Joi.string().optional().allow(null, '').description('The error description (if status code is >= 400)'),
	connection_id: Joi.string().optional(),
	ip_address: Joi.string().optional().allow(null, ''),
	type: joiApiCallType.required().description('The type of API Call being logged'),
	method: Joi.string().required().allow(''),
	environment: Joi.string().optional().allow(null, '').default('Production'),
}).label('ApiCall');

export const joiConnectionAuth = Joi.object({
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
	meta: Joi.object().optional(),
	state: Joi.string().optional().allow(null, ''),
	other_auth_info: Joi.array().items(Joi.string()).optional().allow(null, '').description('When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names'),
	api_url: Joi.string().uri().optional().allow(null, ''),
	authorize_url: Joi.string().uri().optional().allow(null, ''),
	token_url: Joi.string().uri().optional().allow(null, ''),
	pem: Joi.string().optional().allow(null, '').description('the PEM X.509 certificate in Base64 ASCII format'),
	key: Joi.string().optional().allow(null, '').description('the private KEY X.509 certificate in Base64 ASCII format'),
	refresh_token_expires_in: Joi.number().optional(),
	refresh_token_expires_date: Joi.date().optional(),
}).label('ConnectionAuth').description('An authentication object that represents a specific authorized user\'s connection to an integration.');

export const joiConnection = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional().description('Unique identifier for this integration object'),
	created_at: Joi.date().meta( { readonly: true }).optional().description('The date that this integration object was created'),
	updated_at: Joi.date().meta( { readonly: true }).optional().description('The last date that this integration object was updated'),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	integration_type: Joi.string().required().allow('').description('The integration type'),
	external_xref: Joi.string().optional().allow(null, '').description('customer\'s user ID'),
	permissions: Joi.array().items(joiIntegrationPermission).required(),
	categories: Joi.array().items(joiIntegrationCategory).required().description('The Integration categories that this connection supports'),
	auth: joiConnectionAuth.optional(),
	is_paused: Joi.boolean().optional().description('Whether this integration has exceed the monthly limit of the plan'),
	auth_aws_arn: Joi.string().optional().allow(null, '').description('the AWS ARN / secretID for the stored auth field'),
	environment: Joi.string().optional().allow(null, '').default('Production'),
	last_healthy_at: Joi.date().optional(),
	last_unhealthy_at: Joi.date().optional(),
	cursors_cache: Joi.array().items(Joi.object()).optional(),
}).label('Connection').description('A connection represents a specific authentication of an integration.');

export const joiIntegrationSupport = Joi.object({
	methods: Joi.object().pattern(/^/, Joi.boolean()).optional(),
	list_sort_by_name: Joi.boolean().optional(),
	list_sort_by_created_at: Joi.boolean().optional(),
	list_sort_by_updated_at: Joi.boolean().optional(),
	list_updated_gte: Joi.boolean().optional(),
	list_user_id: Joi.boolean().optional(),
	list_customer_id: Joi.boolean().optional(),
	list_company_id: Joi.boolean().optional(),
	list_contact_id: Joi.boolean().optional(),
	list_application_id: Joi.boolean().optional(),
	list_candidate_id: Joi.boolean().optional(),
	list_deal_id: Joi.boolean().optional(),
	list_job_id: Joi.boolean().optional(),
	list_invoice_id: Joi.boolean().optional(),
	list_order: Joi.boolean().optional(),
	list_query: Joi.boolean().optional(),
	list_limit: Joi.boolean().optional(),
	list_offset: Joi.boolean().optional(),
	search_twitter: Joi.boolean().optional(),
	search_name: Joi.boolean().optional(),
	search_linkedin_url: Joi.boolean().optional(),
	search_email: Joi.boolean().optional(),
	search_domain: Joi.boolean().optional(),
	inbound_fields: Joi.object().label('SupportInboundType').optional(),
	outbound_fields: Joi.object().label('SupportOutboundType').optional(),
	webhook_type: joiIntegrationSupportWebhookType.optional(),
	webhook_events: Joi.array().items(joiWebhookEvent).optional(),
	list_parent_id: Joi.boolean().optional(),
	list_account_id: Joi.boolean().optional(),
	list_interview_id: Joi.boolean().optional(),
	list_list_id: Joi.boolean().optional(),
	list_ticket_id: Joi.boolean().optional(),
}).label('IntegrationSupport');

export const joiIntegration = Joi.object({
	type: Joi.string().required().allow('').description('Identifier for this integration'),
	created_at: Joi.string().optional().allow(null, '').description('Date that this integration was supported (YYYY-MM-DD)'),
	updated_at: Joi.string().optional().allow(null, '').description('YYYY-MM-DD'),
	name: Joi.string().required().allow('').description('The integration\'s name'),
	is_active: Joi.boolean().optional().description('Is this integration active in this workspace'),
	categories: Joi.array().items(joiIntegrationCategory).required().description('The categories of support solutions that this integration has'),
	api_docs_url: Joi.string().uri().optional().allow(null, '').description('The URL of the integration\'s API documentation'),
	logo_url: Joi.string().uri().optional().allow(null, '').description('The URL of the integration\'s logo'),
	in_progress: Joi.boolean().required().description('If this integration is not yet available as it is currently being built by unified.to'),
	color: Joi.string().optional().allow(null, '').description('button background color for AUTH'),
	text_color: Joi.string().optional().allow(null, '').description('text color for AUTH'),
	fa_icon: Joi.string().optional().allow(null, '').description('font-awesome icon'),
	token_names: Joi.array().items(Joi.string()).optional().allow(null, '').description('if auth_types = \'token\''),
	token_instructions: Joi.array().items(Joi.string()).optional().allow(null, '').description('instructions for the user on how to find the token/key'),
	web_url: Joi.string().uri().optional().allow(null, '').description('URL for the software vendor'),
	rate_limit_description: Joi.string().optional().allow(null, ''),
	beta: Joi.boolean().optional().description('This integration is new and is still considered "beta"'),
	support: Joi.object().pattern(/^/, joiIntegrationSupport).required(),
	tested_at: Joi.date().optional(),
}).label('Integration').description('Informational object for supported integrations.');

export const joiInvoice = Joi.object({
	stripe_id: Joi.string().required().allow(''),
	created_at: Joi.date().required(),
	amount: Joi.number().required(),
	connections: Joi.number().required(),
	plan: Joi.string().required().allow(''),
}).label('Invoice');

export const joiIssue = Joi.object({
	id: Joi.string().optional(),
	created_at: Joi.string().optional().allow(null, ''),
	updated_at: Joi.string().optional().allow(null, ''),
	title: Joi.string().required().allow(''),
	status: joiIssueStatus.required(),
	url: Joi.string().uri().optional().allow(null, ''),
	workspace_id: Joi.string().required(),
	type: joiIssueType.required(),
	resolution_time: Joi.number().optional(),
}).label('Issue');

export const joiNotification = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional().description('Unique identifier for this notification object'),
	created_at: Joi.date().meta( { readonly: true }).optional().description('The date that this integration object was created'),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	title: Joi.string().required().allow('').description('The title of the notification'),
	description: Joi.string().optional().allow(null, '').description('Longer description of this notification'),
	icon: Joi.string().optional().allow(null, '').description('The icon name'),
	link_url: Joi.string().optional().allow(null, '').description('Link to the event'),
	user_id: Joi.string().optional(),
	user_name: Joi.string().optional().allow(null, ''),
}).label('Notification').description('A notification of an event that occurred in you account.');

export const joiPermission = Joi.object({
	can_create_org: Joi.boolean().meta( { readonly: true }).optional(),
	can_leave_org: Joi.boolean().meta( { readonly: true }).optional(),
	can_downgrade: Joi.boolean().meta( { readonly: true }).optional(),
	can_invite: Joi.boolean().meta( { readonly: true }).optional(),
	can_update_org: Joi.boolean().meta( { readonly: true }).optional(),
	can_add_and_remove_admin: Joi.boolean().meta( { readonly: true }).optional(),
	can_accept_invite: Joi.boolean().meta( { readonly: true }).optional(),
	can_reject_invite: Joi.boolean().meta( { readonly: true }).optional(),
	can_pay: Joi.boolean().meta( { readonly: true }).optional(),
	can_get_invoices: Joi.boolean().meta( { readonly: true }).optional(),
	is_admin: Joi.boolean().meta( { readonly: true }).optional(),
}).label('Permission');

export const joiPlan = Joi.object({
	test_stripe_product_id: Joi.string().optional().allow(null, ''),
	test_stripe_price_id: Joi.string().optional().allow(null, ''),
	min_annual_price: Joi.number().optional(),
	stripe_annual_price_id: Joi.string().optional().allow(null, ''),
	test_stripe_annual_price_id: Joi.string().optional().allow(null, ''),
	stripe_overage_price_id: Joi.string().optional().allow(null, ''),
	test_stripe_overage_price_id: Joi.string().optional().allow(null, ''),
}).label('Plan');

export const joiUser = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional(),
	created_at: Joi.date().meta( { readonly: true }).optional(),
	updated_at: Joi.date().meta( { readonly: true }).optional(),
	name: Joi.string().required().allow(''),
	email: Joi.string().email().meta( { readonly: true }).optional().allow(''),
	workspace_id: Joi.string().required().description('The current workspace'),
	workspace_ids: Joi.array().items(Joi.string()).required().description('A list of all of the user\'s workspaces'),
	environment: Joi.string().optional().allow(null, '').default('Production'),
	meta: Joi.object().optional(),
}).label('User').description('The User object represents you on the system. A user can belong to multiple workspaces (ie. organizations).');

export const joiWebhook = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional(),
	created_at: Joi.date().meta( { readonly: true }).optional(),
	updated_at: Joi.date().optional(),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	connection_id: Joi.string().required(),
	hook_url: Joi.string().uri().required().allow('').description('The URL of the webhook'),
	object_type: joiObjectType.required().description('The object to return (eg. CRM "contact")'),
	interval: Joi.number().optional().description('The interval (in minutes) to check for updated/new objets.  Minimum is 5 minutes.  Interval is based off of 5-minute increments.'),
	checked_at: Joi.date().meta( { readonly: true }).optional().description('The last date/time that a check was done on this object'),
	integration_type: Joi.string().meta( { readonly: true }).optional().allow(''),
	environment: Joi.string().meta( { readonly: true }).optional().allow(null, '').default('Production'),
	event: joiWebhookEvent.required(),
	runs: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, '').description('An array of the most revent virtual webhook runs'),
	fields: Joi.string().optional().allow(null, ''),
	webhook_type: joiIntegrationSupportWebhookType.meta( { readonly: true }).optional(),
	meta: Joi.object().meta( { readonly: true }).optional(),
	is_healthy: Joi.boolean().optional(),
	page_max_limit: Joi.number().optional(),
}).label('Webhook').description('A webhook is used to POST new/updated information to your server.');

export const joiWebhookData = Joi.object({
	data: Joi.array().items(Joi.object()).required().description('The data array will contact an array of specific objects according to the webhook\'s connection. (eg. CRM Contacts)'),
	webhook: joiWebhook.required().description('The webhook object'),
	nonce: Joi.string().required().allow('').description('random string'),
	sig: Joi.string().required().allow('').description('HMAC-SHA1(workspace.secret, data + nonce)'),
	type: joiWebhookDataType.required(),
}).label('WebhookData');

export const joiWorkspaceIntegration = Joi.object({
	integration_type: Joi.string().required().allow(''),
	client_id: Joi.string().optional().allow(null, ''),
	client_secret: Joi.string().optional().allow(null, ''),
	consumer_key: Joi.string().optional().allow(null, ''),
	consumer_secret: Joi.string().optional().allow(null, ''),
	is_active: Joi.boolean().required(),
	api_url: Joi.string().optional().allow(null, ''),
	authorize_url: Joi.string().uri().optional().allow(null, ''),
	token_url: Joi.string().uri().optional().allow(null, ''),
	pem: Joi.string().optional().allow(null, '').description('the PEM X.509 certificate in Base64 ASCII format'),
	key: Joi.string().optional().allow(null, '').description('the private KEY X.509 certificate in Base64 ASCII format'),
	environment: Joi.string().optional().allow(null, '').description('authentication environment').default('Production'),
	categories: Joi.array().items(joiIntegrationCategory).optional(),
}).label('WorkspaceIntegration');

export const joiWorkspace = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional(),
	created_at: Joi.date().meta( { readonly: true }).optional(),
	updated_at: Joi.date().meta( { readonly: true }).optional(),
	name: Joi.string().required().allow(''),
	admin_ids: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().description('Only these users can add additional admins and invite other users'),
	invited_emails: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, ''),
	pay_user_id: Joi.string().meta( { readonly: true }).optional().allow(null, ''),
	plan: Joi.string().meta( { readonly: true }).optional().allow(null, ''),
	stripe_customer: Joi.string().meta( { readonly: true }).optional().allow(null, ''),
	stripe_subscriptions: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, ''),
	stripe_prices: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, ''),
	secret: Joi.string().meta( { readonly: true }).optional().allow(null, '').description('Workspace API secret'),
	integrations: Joi.array().items(joiWorkspaceIntegration).meta( { readonly: true }).optional().description('Workspace active integrations'),
	ip_addresses: Joi.array().items(Joi.string()).optional().allow(null, '').description('a list of IP addresses that are allowed to access this workspace'),
	aws_region: Joi.string().optional().allow(null, ''),
	aws_key: Joi.string().optional().allow(null, ''),
	aws_secret: Joi.string().optional().allow(null, ''),
	datadog_apikey: Joi.string().optional().allow(null, ''),
	datadog_site: Joi.string().optional().allow(null, ''),
	environments: Joi.array().items(Joi.string()).optional().allow(null, '').description('a list of authentication environments for the workspace integrations'),
	add_ons: Joi.array().items(Joi.string()).optional().allow(null, ''),
	checklist: Joi.object().optional(),
	plan_term: joiPlanTerm.optional().description('monthly or yearly').default('monthly'),
	stripe_canceling_at: Joi.date().optional(),
	domain: Joi.string().optional().allow(null, '').description('when set, users of the same domain will auto-join this workspace.  must not be gmail.com or other public domains'),
}).label('Workspace').description('The User\'s workspace object. A workspace is like an organization that one or more users belong to.');

