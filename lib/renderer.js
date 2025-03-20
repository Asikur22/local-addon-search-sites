"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
module.exports = function (context) {
    const hooks = context.hooks;
    const stylesheetPath = path_1.default.resolve(__dirname, '../style.css');
    hooks.addContent('stylesheets', () => React.createElement("link", { rel: "stylesheet", key: "search-addon-styleesheet", href: stylesheetPath }));
    hooks.addContent('SitesSidebar_SiteList:Before', () => {
        function search_sites(event) {
            const sites = document.querySelectorAll('.AccordionItem .TID_SiteListSite_Span_SiteName');
            sites.forEach(site => {
                let siteRow = site.closest('div > .TID_SiteListSite');
                if (site.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
                    siteRow.style.display = 'block';
                }
                else {
                    siteRow.style.display = 'none';
                }
            });
        }
        return (React.createElement("div", { className: "sites-search" },
            React.createElement("input", { type: "search", name: "site-search", placeholder: "Search Site", onChange: search_sites })));
    });
};
//# sourceMappingURL=renderer.js.map