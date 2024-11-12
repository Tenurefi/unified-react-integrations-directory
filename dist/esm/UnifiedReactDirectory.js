var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
const API_NA_URL = 'https://api.unified.to';
const API_EU_URL = 'https://api-eu.unified.to';
const CATEGORY_MAP = {
    crm: 'CRM',
    martech: 'Marketing',
    ticketing: 'Ticketing',
    uc: 'Unified Communications',
    enrich: 'Enrichment',
    ats: 'ATS',
    hris: 'HR',
    accounting: 'Accounting',
    storage: 'Storage',
    commerce: 'E-Commerce',
    payment: 'Payments',
    genai: 'Generative AI',
    messaging: 'Messaging',
    kms: 'KMS',
    task: 'Tasks',
};
export default function UnifiedDirectory(props) {
    const API_URL = props.dc === 'eu' ? API_EU_URL : API_NA_URL;
    const [INTEGRATIONS, setIntegrations] = useState([]);
    const [CATEGORIES, setCategories] = useState([]);
    const [selectedCategory, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    useEffect(() => {
        if (!loading && !INTEGRATIONS.length) {
            setLoading(true);
            load_data().then((data) => {
                data = data.filter((i) => !(i.categories.length === 1 && i.categories[0] === 'auth')) || [];
                setIntegrations(data);
                let _CATEGORIES = [];
                data.forEach((integration) => {
                    var _a;
                    (_a = integration.categories) === null || _a === void 0 ? void 0 : _a.forEach((c) => {
                        var _a;
                        if (CATEGORY_MAP[c] && (!((_a = props.categories) === null || _a === void 0 ? void 0 : _a.length) || props.categories.indexOf(c) !== -1)) {
                            _CATEGORIES.push(c);
                        }
                    });
                });
                _CATEGORIES = [...new Set(_CATEGORIES)];
                if (_CATEGORIES.length === 1) {
                    _CATEGORIES = [];
                }
                else {
                    _CATEGORIES = _CATEGORIES.sort((a, b) => a.localeCompare(b));
                }
                setCategories(_CATEGORIES);
                setLoading(false);
            });
        }
    }, [props.categories]);
    function filter(integrations) {
        return (integrations === null || integrations === void 0 ? void 0 : integrations.filter((integration) => !selectedCategory || integration.categories.indexOf(selectedCategory) !== -1)) || [];
    }
    function unified_get_auth_url(integration) {
        var _a;
        let url = `${API_URL}/unified/integration/auth/${props.workspaceId || props.workspace_id}/${integration.type}?redirect=1`;
        if (props.external_xref) {
            url += `&external_xref=${encodeURIComponent(props.external_xref)}`;
        }
        if (props.state) {
            url += `&state=${encodeURIComponent(props.state)}`;
        }
        if ((_a = props.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            url += `&scopes=${encodeURIComponent(props.scopes.join(','))}`;
        }
        if (props.environment && props.environment !== 'Production') {
            url += `&env=${encodeURIComponent(props.environment)}`;
        }
        if (props.lang) {
            url += `&lang=${props.lang}`;
        }
        url += `&success_redirect=${encodeURIComponent(props.success_redirect || '')}`;
        url += `&failure_redirect=${encodeURIComponent(props.failure_redirect || '')}`;
        return url;
    }
    function load_data() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${API_URL}/unified/integration/workspace/${props.workspaceId || props.workspace_id}?summary=1${((_a = props.categories) === null || _a === void 0 ? void 0 : _a.length) ? '&categories=' + props.categories.join(',') : ''}${props.environment === 'Production' || !props.environment ? '' : '&env=' + encodeURIComponent(props.environment)}`;
            try {
                const response = yield fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(String(response.status));
                }
                return response.json();
            }
            catch (error) {
                console.error('Failed to load data:', error);
                return [];
            }
        });
    }
    function handleSearchChange(e) {
        e.preventDefault();
        setSearch(e.currentTarget.value);
    }
    function searchFilter(integration) {
        return integration.name.toLowerCase().includes(search.toLowerCase());
    }
    return (React.createElement("div", { className: "unified" },
        !props.nostyle && React.createElement("style", null, "@import url(https://api.unified.to/docs/unified.css)"),
        !props.notabs && CATEGORIES && CATEGORIES.length > 0 && filter(INTEGRATIONS).length && (React.createElement("div", { className: "unified_menu" },
            React.createElement("button", { className: `unified_button unified_button_all ${selectedCategory ? '' : ' active'}`, onClick: () => setCategory('') }, "All"),
            CATEGORIES.map((cat) => (React.createElement("button", { key: cat, className: `unified_button unified_button_${cat} ${selectedCategory === cat ? 'active' : ''}`, onClick: () => setCategory(cat) }, CATEGORY_MAP[cat]))))),
        props.search_bar && (React.createElement("div", null,
            React.createElement("input", { type: 'search', name: 'search integrations', id: 'search_integrations', value: search, onChange: handleSearchChange, style: {
                    width: '100%',
                    borderRadius: '4px',
                    border: '1px solid rgb(230, 232, 240)',
                    marginBottom: '12px',
                    fontWeight: 500,
                }, placeholder: 'Search for integrations' }))),
        React.createElement("div", { className: "unified_vendors" },
            filter(INTEGRATIONS).filter(searchFilter).map((integration) => (React.createElement("a", { key: integration.type, href: unified_get_auth_url(integration), className: "unified_vendor" },
                React.createElement("img", { alt: integration.name, src: integration.logo_url, className: "unified_image" }),
                React.createElement("div", { className: "unified_vendor_inner" },
                    React.createElement("div", { className: "unified_vendor_name" }, integration.name),
                    !props.nocategories &&
                        integration.categories
                            .filter((c) => !CATEGORIES || CATEGORIES.indexOf(c) > -1)
                            .filter((c) => CATEGORY_MAP[c])
                            .map((cat) => (React.createElement("div", { key: cat, className: "unified_vendor_cats" },
                            React.createElement("span", null, CATEGORY_MAP[cat])))))))),
            filter(INTEGRATIONS).length === 0 && React.createElement("div", { className: "unified_vendor" }, "No integrations available"))));
}
//# sourceMappingURL=UnifiedReactDirectory.js.map