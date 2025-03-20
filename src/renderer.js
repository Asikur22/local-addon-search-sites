import path from 'path';

module.exports = function (context) {
	const hooks = context.hooks;
	const stylesheetPath = path.resolve(__dirname, '../style.css');

	hooks.addContent('stylesheets', () => <link rel="stylesheet" key="search-addon-styleesheet" href={stylesheetPath}/>);

	hooks.addContent('SitesSidebar_SiteList:Before', () => {
		function search_sites (event) {
			const sites = document.querySelectorAll('.AccordionItem .TID_SiteListSite_Span_SiteName');

			sites.forEach(site => {
				let siteRow = site.closest('div > .TID_SiteListSite');

				if ( site.textContent.toLowerCase().includes(event.target.value.toLowerCase()) ) {
					siteRow.style.display = 'block';
				} else {
					siteRow.style.display = 'none';
				}
			});
		}

		return (
			<div className="sites-search">
				<input type="search" name="site-search" placeholder="Search Site" onChange={search_sites}/>
			</div>
		);
	});
}
