export const PAGE_STATES = {
    ERROR: {
        image: 'assets/images/error-state-image.webp',
        title: 'Something has gone seriously wrong',
        description:
            'It’s always time for a coffee break We should be back by the time you finish your coffee.',
    },
    NOT_FOUND: {
        image: 'assets/images/not-found-image.webp',
        title: 'Page not found',
        description:
            'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
    },
    WORK_IN_PROGRESS: {
        image: 'assets/images/work-in-progress.webp',
        title: 'Work in progress',
        description: 'This feature is under construction',
    },
};

export type PageState = (typeof PAGE_STATES)[keyof typeof PAGE_STATES];
