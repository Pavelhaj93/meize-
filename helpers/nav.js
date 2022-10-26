export const links = {
    left: [
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Projects',
            href: '/projects'
        },
    ],
    right: [
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title: 'Language',
            href: '/en',
            type: 'dropdown',
            items: [
                {
                    title: 'English',
                    href: '/',
                    locale: 'en'
                },
                {
                    title: 'Čeština',
                    href: '/',
                    locale: 'cs'
                }
            ]
        },
    ]
}