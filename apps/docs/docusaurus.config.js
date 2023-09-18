const config = {
    title: 'StreamPay x Shopify',
    tagline: 'Enable Solana powered Payments on Shopify',
    favicon: 'img/favicon.ico',
    url: 'https://shopifydocs.solanapay.com',
    baseUrl: '/',
    organizationName: 'Stream Protocol / StreamPayments',
    projectName: 'stream-payments-app',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'StreamPayments App',
            logo: {
                alt: 'StreamPay Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    href: 'https://github.com/stream-protocol/stream-payments-app',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'mailto:contact@streamprotocol.org',
                    label: 'Support',
                    position: 'right',
                },
            ],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
    },
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
