type Data = {
  title: string;
  media: string | null;
  intro: string;
  steps: {
    title: string;
    description: string;
    completed: boolean;
  }[];
};

export const GUIDE_SEARCH: Data = {
  title: 'Search my Data',
  media: null,
  intro:
    'Create a search experience for your websites, applications, workplace content, or anything in between.',
  steps: [
    {
      title: 'Search guide step 1',
      description:
        'Adding data is fast and easy with our out-of-the-box integrations. Quickly monitor popular cloud services, applications, systems, containers, and more.',
      completed: false,
    },
    {
      title: 'Search guide step 2',
      description:
        'See how you can easily unlock the power of the Elastic search platform to query your logs, view your infrastructure, monitor applications, visualize your data, and more.',
      completed: true,
    },
  ],
};

export const GUIDE_OBSERVABILITY = {
  title: 'Observe my infrastructure',
  media:
    '<img src="../images/guided-setup-video.png" alt="video setup" width="100%" height="257">',
  intro:
    'This guide will help you quickly gain visibility into your environment and let you take action by collecting your logs, metrics, and traces using popular integrations. We recommend going in order.',
  steps: [
    {
      title: 'Monitor your environment',
      description:
        'Adding data is fast and easy with our out-of-the-box integrations. Quickly monitor popular cloud services, applications, systems, containers, and more.',
      completed: false,
    },
    {
      title: 'Tour Elastic Observability',
      description:
        'See how you can easily unlock the power of the Elastic search platform to query your logs, view your infrastructure, monitor applications, visualize your data, and more.',
      completed: true,
    },
    {
      title: 'Explore your data',
      description:
        'Query and analyze your data using the Discover app. Find any detail in your data, no matter how obscure or complex.',
      completed: false,
    },
    {
      title: 'Do more with Elastic Observability',
      description:
        'See how you can enhance visibility into your environment with capabilities from Elastic like Application Performance Monitoring (APM), Uptime Monitoring, and more.',
      completed: false,
    },
  ],
};

export const GUIDE_SECURITY = {
  title: 'Protect my environment',
  media: null,
  intro:
    'The following steps will help you get started with security. We recommend going in order. ',
  steps: [
    {
      title: 'Secure your environment',
      description:
        'Adding data is fast and easy with our out-of-the-box integrations. Quickly monitor popular cloud services, applications, systems, containers, and more.',
      completed: false,
    },
    {
      title: 'Explore your data',
      description:
        'Query and analyze your data using the Discover app. Find any detail in your data, no matter how obscure or complex.',
      completed: false,
    },
  ],
};
