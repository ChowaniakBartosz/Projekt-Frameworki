// Platform icons
import homeIcon from 'assets/icons/house2.svg'
import publicationsIcon from 'assets/icons/publications.svg'
import peopleIcon from 'assets/icons/people.svg'
import entitiesIcon from 'assets/icons/entities.svg'
import administrationIcon from 'assets/icons/administration.svg'

// Workspaces icons
import contractIcon from 'assets/icons/comments.svg'
import corporateIcon from 'assets/icons/comments.svg'
import groupNormsIcon from 'assets/icons/network.svg'

// Account icons
import profilePicture from 'assets/avatar.jpg'
import privacyIcon from 'assets/icons/privacy.svg'
import profileSettingsIcon from 'assets/icons/settings.svg'
import logoutIcon from 'assets/icons/logout.svg'

interface INavigationItems {
    title?: string,
    items: {
        title: string,
        to: string,
        icon: string,
    }[]
}

const NavigationItems: INavigationItems[] = [
    {
    title: "Platform",
    items: [
        {
            title: 'Home',
            to: '/',
            icon: homeIcon,
        },
        {
            title: 'Publications',
            to: '/publications',
            icon: publicationsIcon,
        },
        {
            title: 'People',
            to: '/people',
            icon: peopleIcon,
        },
        {
            title: 'Entities',
            to: '/entities',
            icon: entitiesIcon,
        },
        {
            title: 'Administration',
            to: '/administration',
            icon: administrationIcon,
        }
    ]
    },
    {
        title: "Workspaces",
        items: [
            {
                title: 'Client contract',
                to: '/clientContract',
                icon: contractIcon,
            },
            {
                title: 'Supplier contract',
                to: '/supplierContract',
                icon: contractIcon,
            },
            {
                title: 'Corporate',
                to: '/corporate',
                icon: corporateIcon,
            },
            {
                title: 'Group Norms',
                to: '/groupNorms',
                icon: groupNormsIcon,
            },
            {
                title: 'Real estate contracts',
                to: '/realestateContracts',
                icon: contractIcon,
            }
        ]
    },
    {
        title: "Account",
        items: [
            {
                title: "Bartosz Chowaniak",
                to: '/profile',
                icon: profilePicture,
            },
            {
                title: 'Privacy',
                to: '/privacy',
                icon: privacyIcon,
            },
            {
                title: 'Profile',
                to: '/profile',
                icon: profileSettingsIcon,
            }
        ]
    },
    {
        items: [
            {
                title: 'Logout',
                to: '/logout',
                icon: logoutIcon
            }
        ]
    }
]

export default NavigationItems;