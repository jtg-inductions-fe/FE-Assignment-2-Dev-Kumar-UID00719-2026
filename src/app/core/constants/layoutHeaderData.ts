export const HEADER_DATA = {
    DASHBOARD: {
        heading: 'Overview Dashboard',
        paragraph:
            'System administrator overview panel. Impersonate owners or view aggregate metrics.',
    },
    RESTAURANTS: {
        heading: 'Restaurants',
        paragraph: 'Manage partner restaurants and ownership list.',
    },
    EDIT_RESTAURANTS: {
        heading: 'Edit Restaurant',
        paragraph: 'Update the restaurant name, address, and owners.',
    },
    ADD_RESTAURANTS: {
        heading: 'Add Restaurant',
        paragraph: 'Add a new partner restaurant to the portal.',
    },
};

export type HeaderData = {
    heading: string;
    paragraph: string;
};
